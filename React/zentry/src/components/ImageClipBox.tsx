interface ImageClipBoxProps {
  src: string;
  clipClass: string;
}

export const ImageClipBox = ({ src, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);
