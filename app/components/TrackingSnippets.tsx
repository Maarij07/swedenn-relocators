'use client';

import { useEffect } from 'react';

export default function TrackingSnippets() {
  useEffect(() => {
    const fetchAndInjectSnippets = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.swedenrelocators.se/api';
        const response = await fetch(`${apiUrl}/miscellaneous/tracking/snippets`);
        
        if (!response.ok) {
          console.error('Failed to fetch tracking snippets:', response.statusText);
          return;
        }

        const result = await response.json();
        const { data } = result;

        if (!data) {
          console.error('No tracking data received');
          return;
        }

        // Inject head_html into document head
        if (data.head_html) {
          const headElement = document.head;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = data.head_html;
          
          while (tempDiv.firstChild) {
            headElement.appendChild(tempDiv.firstChild);
          }
        }

        // Inject body_start_html at the beginning of body
        if (data.body_start_html) {
          const bodyElement = document.body;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = data.body_start_html;
          
          while (tempDiv.firstChild) {
            bodyElement.insertBefore(tempDiv.firstChild, bodyElement.firstChild);
          }
        }

        // Inject body_end_html at the end of body
        if (data.body_end_html) {
          const bodyElement = document.body;
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = data.body_end_html;
          
          while (tempDiv.firstChild) {
            bodyElement.appendChild(tempDiv.firstChild);
          }
        }
      } catch (error) {
        console.error('Error fetching tracking snippets:', error);
      }
    };

    fetchAndInjectSnippets();
  }, []);

  return null;
}
