export const socialPlatforms = {
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  linkedin: "https://linkedin.com/",
  twitter: "https://twitter.com/",
} as const;

export type SocialPlatform = keyof typeof socialPlatforms;

export function getSocialUrl(platform: SocialPlatform, handle: string): string {
  const baseUrl = socialPlatforms[platform];
  // Remove @ symbol if present
  const cleanHandle = handle.startsWith("@") ? handle.slice(1) : handle;
  return `${baseUrl}${cleanHandle}`;
}

export function getSocialPlatformName(platform: SocialPlatform): string {
  const names = {
    instagram: "Instagram",
    facebook: "Facebook",
    linkedin: "LinkedIn",
    twitter: "Twitter",
  };
  return names[platform];
}
