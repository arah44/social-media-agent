import { Annotation } from "@langchain/langgraph";
import { SimpleRedditPostWithComments } from "../../clients/reddit/types.js";

export const VerifyRedditPostAnnotation = Annotation.Root({
  /**
   * The reddit post to verify. Optional, if not provided then a `link`, or `postID` must be provided.
   */
  redditPost: Annotation<SimpleRedditPostWithComments | undefined>,
  /**
   * A link to a Reddit post. Optional, if not provided then a `redditPost` or `postID` must be provided.
   */
  link: Annotation<string | undefined>,
  /**
   * The ID of a Reddit post. Optional, if not provided then a `redditPost` or `link` must be provided.
   */
  postID: Annotation<string | undefined>,
  /**
   * The external URLs found in the body of the Reddit post.
   */
  externalURLs: Annotation<string[]>,

  // REQUIRED DUE TO USING SHARED NODES
  relevantLinks: Annotation<string[]>,
  pageContents: Annotation<string[]>,
  imageOptions: Annotation<string[]>,
});
