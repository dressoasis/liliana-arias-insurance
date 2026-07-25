import { contactContent } from "../../../content/site/contact";

export const FooterContact = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-sm font-bold text-text uppercase tracking-wider">Contact Us</h3>
      <div className="text-sm text-muted space-y-2">
        <p>{contactContent.phone}</p>
        <p>{contactContent.email}</p>
        <p>{contactContent.address}</p>
      </div>
    </div>
  );
};
