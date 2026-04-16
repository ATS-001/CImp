export async function getTopicContent(id: string): Promise<string> {
  try {
    const res = await import(`@/content/${id}`);
    return res.content;
  } catch (error) {
    return `# Content Not Found\n\nThe content for this topic is currently being updated. Please check back later.`;
  }
}
