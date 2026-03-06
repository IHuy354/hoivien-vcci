/* eslint-disable */

export type PostApiV10PageConfigBody = {
  /** @maxLength 50 */
  code: string;
  /** @maxLength 255 */
  name: string;
  /** @maxLength 255 */
  static_link: string;
  /** @nullable */
  static_link_en?: string | null;
  parent_id: string;
  /**
   * @minimum 0
   * @nullable
   */
  sort_order?: number | null;
  /** @nullable */
  is_article?: boolean | null;
  category_ids?: string[];
};
