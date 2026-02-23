/**
 * Translation Service
 * Acts as a layer above API responses to handle translation of content
 * Uses the translation API endpoint to translate JSON data
 */

interface TranslationRequest {
  data: any;
  language: string;
}

interface TranslationResponse {
  data: any;
  language: string;
  message?: string;
}

/**
 * Translates API response data to the specified language
 * @param data - The data object to translate
 * @param language - Target language code (e.g., 'fr', 'de', 'sv')
 * @returns Translated data object
 */
export async function translateData(
  data: any,
  language: string
): Promise<any> {
  try {
    // If language is English, return data as-is
    if (language === 'en') {
      return data;
    }

    const translateApiUrl = process.env.NEXT_PUBLIC_TRANSLATE_API_URL;
    
    if (!translateApiUrl) {
      console.warn('Translation API URL not configured');
      return data;
    }

    const payload: TranslationRequest = {
      data,
      language,
    };

    const response = await fetch(`${translateApiUrl}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`Translation API error: ${response.status}`);
      return data; // Fallback to original data on error
    }

    const result: TranslationResponse = await response.json();
    return result.data || data;
  } catch (error) {
    console.error('Error translating data:', error);
    return data; // Fallback to original data on error
  }
}

/**
 * Translates FAQ data specifically
 * @param faqs - FAQ data array or object
 * @param language - Target language code
 * @returns Translated FAQ data
 */
export async function translateFAQs(
  faqs: any,
  language: string
): Promise<any> {
  return translateData(faqs, language);
}

/**
 * Translates a single FAQ item
 * @param faq - Single FAQ object with question and answer
 * @param language - Target language code
 * @returns Translated FAQ object
 */
export async function translateFAQ(
  faq: { question: string; answer: string },
  language: string
): Promise<{ question: string; answer: string }> {
  const translated = await translateData(faq, language);
  return translated;
}
