import type { AmpConfig, AmpMediaType } from "./types";
import { fallbackConfig } from "./AmpStory";
export type AmpMediaPropsType = {
  component: AmpMediaType;
  config: AmpConfig;
};

const AmpMediaDefaultProps: AmpMediaPropsType = {
  component: {
    height: 0,
    width: 0,
    poster: "",
    src: "",
    type: "video",
  },
  config: fallbackConfig,
};

const AmpMedia = ({ component, config }: AmpMediaPropsType) => {
  const { height, poster, src, type, width } = component;
  const { mediaPath, imageDir, videoDir } = config;
  if (type === "video") {
    return (
      <amp-video
        width={width.toString()}
        height={height.toString()}
        layout="responsive"
        autoplay=""
        poster={`//${mediaPath}/${imageDir}/${poster}`}
      >
        <source src={`//${mediaPath}/${videoDir}/${src}`} type="video/mp4" />
      </amp-video>
    );
  }
  // TODO: Add <amp-img/>
  // if (type === "image") {
  //   return null;
  // }
  return null;
};
AmpMedia.dafaultProps = AmpMediaDefaultProps;

export default AmpMedia;
