export const useConstruction = () => {
  const showConstruction = import.meta.env.VITE_SHOW_CONSTRUCTION !== 'false';
  return useState('mostrarEnConstruccion', () => showConstruction);
};
