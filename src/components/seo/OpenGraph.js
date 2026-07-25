export const generateOpenGraph = ({ title, description, url, image, type = "website" }) => {
  const tags = [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
  ];

  if (image) {
    tags.push({ property: "og:image", content: image });
  }

  return tags;
};
