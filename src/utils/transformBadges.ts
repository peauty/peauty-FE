// utils/transformers.ts

/**
 * Converts object fields `badgeType` and `badgeColor` to lowercase.
 * @param badges - Array of badge objects to transform.
 * @returns Transformed array with lowercase `badgeType` and `badgeColor`.
 */
export const transformBadges = (badges: any[]) => {
  return badges.map((badge) => ({
    ...badge,
    badgeType: badge.badgeType?.toLowerCase(),
    badgeColor: badge.badgeColor?.toLowerCase(),
  }));
};
