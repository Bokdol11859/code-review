const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: { sans: 'Pretendard' },
    colors: {
      'neutral-text': colors.gray[700],
      'neutral-text-weak': colors.gray[600],
      'neutral-text-strong': colors.gray[900],
      'neutral-background': colors.gray[100],
      'neutral-background-bold': colors.gray[200],
      'neutral-background-strong': colors.gray[50],
      'neutral-border': colors.gray[300],
      'neutral-border-active': colors.gray[900],
      'accent-text': colors.gray[50],
      'accent-text-weak': colors.blue[500],
      'accent-background': colors.blue[500],
      'accent-background-weak': colors.gray[50],
      'accent-background-strong': colors.gray[900],
      'accent-border-weak': colors.blue[500],
      'danger-text': colors.red[500],
      'danger-border': colors.red[500],
      'icon-text': colors.gray[50],
      'icon-background-blue': colors.blue[500],
      'icon-background-navy': colors.blue[700],
    },
    borderRadius: {
      regular: '11px',
      midium: '14px',
      large: '16px',
      full: '9999px',
    },
    fontSize: {
      S: ['12px', '20px'],
      M: ['16px', '28px'],
      L: ['18px', '32px'],
      XL: ['24px', '40px'],
      XXL: ['32px', '48px'],
    },
  },
};
