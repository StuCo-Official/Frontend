import { Chat } from "../models/Chat";

/**
 * Finds the participant ID that does not match the current user's ID.
 * @param chat The selected chat object.
 * @param userId The current user's ID.
 * @returns The participant ID or undefined if not found.
 */
export const findParticipantId = (chat: Chat | null, userId: string | undefined): string | undefined => {
  return chat?.participants.find((participant) => participant._id !== userId)?._id;
};
