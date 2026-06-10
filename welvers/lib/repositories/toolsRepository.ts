import { prisma } from "@/lib/prisma";
import { getTools, getToolBySlug } from "@/lib/content/tools";

export const ToolsRepository = {
  async list(locale: string) {
    const content = getTools(locale);
    return content;
  },
  async find(locale: string, slug: string) {
    return getToolBySlug(locale, slug);
  }
};
