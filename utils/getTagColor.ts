const tagColors = [
  { bg: "bg-red-100", text: "text-red-800" },
  { bg: "bg-green-100", text: "text-green-800" },
  { bg: "bg-yellow-100", text: "text-yellow-800" },
  { bg: "bg-blue-100", text: "text-blue-800" },
  { bg: "bg-purple-100", text: "text-purple-800" },
  { bg: "bg-pink-100", text: "text-pink-800" },
  { bg: "bg-indigo-100", text: "text-indigo-800" },
  { bg: "bg-orange-100", text: "text-orange-800" },
];

export const getTagColor = (tag: string) => {
  const index =
    [...tag].reduce((acc, char) => acc + char.charCodeAt(0), 0) %
    tagColors.length;
  return tagColors[index];
};
