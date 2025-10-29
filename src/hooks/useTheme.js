import { useState, useEffect } from 'react';

// Função para verificar a preferência do Sistema Operacional
function getOSPreference() {
  // Verifica se 'window' existe (para não quebrar em build)
  if (typeof window === 'undefined') return 'light';

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  // 1. O estado inicial checa o localStorage,
  //    ou usa a preferência do S.O.
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';

    const savedTheme = localStorage.getItem('theme');
    return savedTheme || getOSPreference();
  });

  // 2. Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // 3. Efeito que ATUALIZA o <html> e o localStorage
  useEffect(() => {
    // Adiciona ou remove o atributo 'data-theme' do <html>
    document.documentElement.setAttribute('data-theme', theme);

    // Salva a preferência no localStorage
    localStorage.setItem('theme', theme);
  }, [theme]); // Roda toda vez que o 'theme' mudar

  // 4. Retorna o tema atual e a função para trocá-lo
  return { theme, toggleTheme };
}
