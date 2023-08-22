import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import { graphicsProjectImage } from "../localstore/LocalData";

const GraphicsDesignProjects = () => {
  
  return (
    <section>
      <div  className="mx-auto w-[90%]">
            <ImageGallery
              items={graphicsProjectImage}
              showBullets={true}
              autoPlay={true}
              lazyLoad={true}
            />
      </div>
    </section>
  );
};

export default GraphicsDesignProjects;
