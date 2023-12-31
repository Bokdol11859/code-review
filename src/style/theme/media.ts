const deviceSizes = {
  mobile: '450px',
  tablet: '768px',
  laptop: '1024px',
};

const device = {
  mobile: `screen and (max-width:${deviceSizes.mobile})`,
  tablet: `screen and (max-width:${deviceSizes.tablet})`,
  laptop: `screen and (max-width:${deviceSizes.laptop})`,
};

const mediatheme = {
  device,
};

export default mediatheme;
