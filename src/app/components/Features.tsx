import { SiMermaid, SiTypst, SiP5Dotjs} from "react-icons/si";
import { FaMarkdown, FaFolder, FaPencilAlt, } from "react-icons/fa";
import Link from "next/link";

const Features = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <FaMarkdown size={20} />
        <span>
          <strong>
            <Link href="/blog/1.%20Intro/1.%20Markdown" target="_blank">
              Markdown
            </Link>{" "}
          </strong>
          for text formatting
        </span>
      </div>

      <div className="flex items-center gap-2">
        <SiMermaid size={20} />
        <span>
          <strong>
            <Link href="/blog/1.%20Intro/1.%20Markdown" target="_blank">
              Mermaid
            </Link>
          </strong>{" "}
          for elegant diagrams
        </span>
      </div>

      <div className="flex items-center gap-2">
        <SiTypst size={20} />
        <span>
          <strong>
            <Link href="/blog/1.%20Intro/1.%20Markdown" target="_blank">
              Typst
            </Link>{" "}
          </strong>
          for  mathematics
        </span>
      </div>

      <div className="flex items-center gap-2">
        <SiP5Dotjs size={20} />
        <span>
          Automatic <strong>P5js</strong> for visualization
        </span>
      </div>

      <div className="flex items-center gap-2">
        <FaFolder size={20} />
        <span>
          Automatic <strong>TreeSideBar</strong> for easy navigation
        </span>
      </div>

      <div className="flex items-center gap-2">
        <FaPencilAlt size={20} />
        <span>
          Full support for Vietnamese characters and spaces in folder/file
          names.
        </span>
      </div>
    </div>
  );
};

export default Features;
