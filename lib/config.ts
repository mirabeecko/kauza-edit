/**
 * Configuration utility for controlling visibility of město Krupka related content
 */

/**
 * Determines if město Krupka and SPORT Krupka related content should be displayed
 * Can be controlled via NEXT_PUBLIC_SHOW_CITY_CONTENT environment variable
 * Defaults to true if not set
 */
export const showCityContent = (): boolean => {
  // Check environment variable, default to true
  const envValue = process.env.NEXT_PUBLIC_SHOW_CITY_CONTENT;

  if (envValue === undefined || envValue === null || envValue === '') {
    return true; // Default: show everything
  }

  return envValue.toLowerCase() === 'true';
};

/**
 * List of actor slugs that are related to město Krupka
 */
export const CITY_ACTOR_SLUGS = [
  'jan-kuzma',
  'jan-bokoc',
  'tomas-syrycansky',
];

/**
 * Check if an actor slug is city-related
 */
export const isCityActor = (slug: string): boolean => {
  return CITY_ACTOR_SLUGS.includes(slug);
};
