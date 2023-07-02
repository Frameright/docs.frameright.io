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
  const [avoidNoRegion, setAvoidNoRegion] = React.useState('off');
  const [debug, setDebug] = React.useState('on');

  React.useEffect(() => {
    if (!animated) return;

    setAvoidNoRegion('on');
    (async () => {
      const firstStep = {
        ...initialAnimatedIdcStyle,
        debug: 'off',
      };
      const steps = [
        firstStep,
        {
          width: '33%',
          aspectRatio: '1 / 2',
          debug: 'off',
        },
        firstStep,
        {
          width: '100%',
          aspectRatio: '3 / 1',
          debug: 'off',
        },
        {
          width: '33%',
          aspectRatio: '1 / 1',
          debug: 'on',
        },
        {
          width: '33%',
          aspectRatio: '1 / 2',
          debug: 'on',
        },
        {
          width: '33%',
          aspectRatio: '1 / 1',
          debug: 'on',
        },
        {
          width: '100%',
          aspectRatio: '3 / 1',
          debug: 'on',
        },
      ];
      while (animated) {
        const nextStep = steps.shift() || firstStep;
        steps.push(nextStep);
        setIdcStyle({
          width: nextStep.width,
          aspectRatio: nextStep.aspectRatio,
        });
        setDebug(nextStep.debug);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    })();
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
              data-avoid-no-region={avoidNoRegion}
              data-debug-draw-regions={debug}
            />
          </ImageDisplayControl>
        </span>
      </span>
    </span>
  );
}
