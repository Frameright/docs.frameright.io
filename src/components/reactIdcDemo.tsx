import React from 'react';

import { ImageDisplayControl } from '@frameright/react-image-display-control';

export function ReactIdcDemo({ animated }) {
  const initialUnanimatedIdcStyle = {
    width: '100%',
    aspectRatio: '3 / 2',
  };

  const initialAnimatedIdcStyle = {
    width: '33%',
    aspectRatio: '1 / 1',
  };

  const [idcStyle, setIdcStyle] = React.useState(
    animated ? initialAnimatedIdcStyle : initialUnanimatedIdcStyle
  );

  React.useEffect(() => {
    let disconnected = false;

    (async () => {
      const steps = [
        initialAnimatedIdcStyle,
        {
          width: '33%',
          aspectRatio: '1 / 2',
        },
        initialAnimatedIdcStyle,
        {
          width: '100%',
          aspectRatio: '3 / 1',
        },
      ];
      while (animated && !disconnected) {
        const nextStep = steps.shift() || initialAnimatedIdcStyle;
        steps.push(nextStep);
        setIdcStyle(nextStep);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    })();

    return () => {
      disconnected = true;
    };
  }, []);

  return (
    <span className="react-idc-demo">
      <span>
        <span data-idc-parent style={idcStyle}>
          <ImageDisplayControl>
            <img
              src="/img/ekroos/skater.jpg"
              srcSet="/img/ekroos/skater_highres.jpg  4000w,
                      /img/ekroos/skater.jpg          1500w"
              sizes="(max-width: 4000px) 100vw, 1500px"
              data-avoid-no-region={animated ? 'on ' : 'off'}
              data-debug-draw-regions={animated ? 'off' : 'on'}
            />
          </ImageDisplayControl>
        </span>
      </span>
    </span>
  );
}
