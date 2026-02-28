/**
 * Translation Service
 * Acts as a layer above API responses to handle translation of content
 * Uses the translation API endpoint to translate JSON data
 */

interface TranslationRequest {
  content: any;
  target_language: string;
  context?: string;
  use_cache?: boolean;
}

interface BatchTranslationRequest {
  pages: Array<{
    id: string;
    content: any;
  }>;
  target_language: string;
  context?: string;
  use_cache?: boolean;
}

interface TranslationResponse {
  original_language?: string;
  target_language?: string;
  translated_content?: any;
  cached?: boolean;
  status?: string;
  request_id?: string;
  data?: any;
  error?: string;
}

interface BatchTranslationResponse {
  status?: string;
  results?: Array<{
    id: string;
    translated_content: any;
    cached?: boolean;
  }>;
  error?: string;
}

// Language code mapping
const languageMap: { [key: string]: string } = {
  'en': 'English',
  'sv': 'Swedish',
  'da': 'Danish',
  'no': 'Norwegian',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'es': 'Spanish',
  'it': 'Italian',
  'pt': 'Portuguese',
  'ru': 'Russian',
  'ja': 'Japanese',
  'zh': 'Chinese',
  'ar': 'Arabic',
  'hi': 'Hindi',
  'nl': 'Dutch',
  'ko': 'Korean',
  'tr': 'Turkish',
  'pl': 'Polish',
  'ur': 'Urdu',
  'pa': 'Punjabi',
  'te': 'Telugu',
  'ta': 'Tamil',
  'el': 'Greek',
  'ps': 'Pashto',
  'fa': 'Farsi',
};

/**
 * Translates API response data to the specified language
 * @param data - The data object to translate
 * @param languageCode - Target language code (e.g., 'fr', 'de', 'sv')
 * @returns Translated data object
 */
export async function translateData(
  data: any,
  languageCode: string
): Promise<any> {
  try {
    // If language is English, return data as-is
    if (languageCode === 'en') {
      return data;
    }

    const translateApiUrl = process.env.NEXT_PUBLIC_TRANSLATE_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_TRANSLATE_API_KEY;
    
    if (!translateApiUrl || !apiKey) {
      console.warn('Translation API URL or API Key not configured');
      return data;
    }

    // Get full language name from code
    const targetLanguage = languageMap[languageCode] || languageCode;

    // Send content as object (dictionary), not string
    const payload: any = {
      content: data,  // Send as object, not JSON string
      target_language: targetLanguage,
      context: 'website',
      use_cache: true,
    };

    console.log('Sending translation request:', {
      url: `${translateApiUrl}/translate`,
      language: targetLanguage,
      contentType: typeof data,
    });

    const response = await fetch(`${translateApiUrl}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': apiKey,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Translation API error: ${response.status}`, errorText);
      return data; // Fallback to original data on error
    }

    const result: TranslationResponse = await response.json();
    
    console.log('Translation response:', {
      status: result.status,
      cached: result.cached,
      hasTranslatedContent: !!result.translated_content,
    });
    
    if (result.status === 'success' && result.translated_content) {
      return result.translated_content;
    }
    
    return data; // Fallback if translation failed
  } catch (error) {
    console.error('Error translating data:', error);
    return data; // Fallback to original data on error
  }
}

/**
 * Translates FAQ data specifically
 * @param faqs - FAQ data array or object
 * @param languageCode - Target language code
 * @returns Translated FAQ data
 */
export async function translateFAQs(
  faqs: any,
  languageCode: string
): Promise<any> {
  return translateData(faqs, languageCode);
}

/**
 * Batch translates multiple items at once (more efficient)
 * Chunks items into batches of 10 since API has a limit
 * @param items - Array of items to translate with id and content
 * @param languageCode - Target language code
 * @returns Object with translated content keyed by id
 */
export async function batchTranslateData(
  items: Array<{ id: string; content: any }>,
  languageCode: string
): Promise<{ [key: string]: any }> {
  try {
    // If language is English, return data as-is
    if (languageCode === 'en') {
      const result: { [key: string]: any } = {};
      items.forEach(item => {
        result[item.id] = item.content;
      });
      return result;
    }

    const translateApiUrl = process.env.NEXT_PUBLIC_TRANSLATE_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_TRANSLATE_API_KEY;
    
    if (!translateApiUrl || !apiKey) {
      console.warn('Translation API URL or API Key not configured');
      const result: { [key: string]: any } = {};
      items.forEach(item => {
        result[item.id] = item.content;
      });
      return result;
    }

    // Get full language name from code
    const targetLanguage = languageMap[languageCode] || languageCode;

    // Chunk items into batches of 10 (API limit)
    const batchSize = 10;
    const batches = [];
    for (let i = 0; i < items.length; i += batchSize) {
      batches.push(items.slice(i, i + batchSize));
    }

    console.log('Sending batch translation requests:', {
      url: `${translateApiUrl}/translate/batch`,
      language: targetLanguage,
      totalItems: items.length,
      batchCount: batches.length,
    });

    // Process all batches in parallel
    const translatedMap: { [key: string]: any } = {};
    const batchPromises = batches.map(async (batch) => {
      // Convert content objects to JSON strings for API
      const pagesWithStringContent = batch.map(item => ({
        id: item.id,
        content: JSON.stringify(item.content),
      }));

      const payload: BatchTranslationRequest = {
        pages: pagesWithStringContent,
        target_language: targetLanguage,
        context: 'website',
        use_cache: true,
      };

      const response = await fetch(`${translateApiUrl}/translate/batch`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': apiKey,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Batch Translation API error: ${response.status}`, errorText);
        // Return original data for this batch
        const batchResult: { [key: string]: any } = {};
        batch.forEach(item => {
          batchResult[item.id] = item.content;
        });
        return batchResult;
      }

      const result: BatchTranslationResponse = await response.json();
      
      if (result.status === 'success' && result.results) {
        const batchTranslated: { [key: string]: any } = {};
        result.results.forEach(item => {
          // Parse the translated content string back to object
          try {
            batchTranslated[item.id] = JSON.parse(item.translated_content);
          } catch (e) {
            // If parsing fails, try to use as-is
            batchTranslated[item.id] = item.translated_content;
          }
        });
        return batchTranslated;
      }
      
      // Return original data for this batch
      const batchResult: { [key: string]: any } = {};
      batch.forEach(item => {
        batchResult[item.id] = item.content;
      });
      return batchResult;
    });

    // Wait for all batches to complete
    const batchResults = await Promise.all(batchPromises);
    
    // Merge all batch results
    batchResults.forEach(batchResult => {
      Object.assign(translatedMap, batchResult);
    });

    console.log('Batch translation completed:', {
      totalTranslated: Object.keys(translatedMap).length,
    });

    return translatedMap;
  } catch (error) {
    console.error('Error in batch translation:', error);
    // Fallback: return original data
    const result: { [key: string]: any } = {};
    items.forEach(item => {
      result[item.id] = item.content;
    });
    return result;
  }
}

/**
 * Translates blog data
 * @param blog - Blog object with title, excerpt, content
 * @param languageCode - Target language code
 * @returns Translated blog object
 */
export async function translateBlog(
  blog: any,
  languageCode: string
): Promise<any> {
  return translateData(blog, languageCode);
}

/**
 * Translates privacy policy or terms data
 * @param data - Policy/terms data object
 * @param languageCode - Target language code
 * @returns Translated data object
 */
export async function translatePolicy(
  data: any,
  languageCode: string
): Promise<any> {
  return translateData(data, languageCode);
}
