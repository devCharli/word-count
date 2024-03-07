type TextAreaProp = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function Textarea({ text, setText }: TextAreaProp) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
  };
  return (
    <div className="text-[22px] py-[30px] px-[40px] sm:flex-2 resize-none">
      <textarea
        className="text-[#959c9f] font-medium h-full w-full"
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"
      />
    </div>
  );
}
