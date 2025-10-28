import { useState, useEffect, useRef, useMemo } from 'react';

export function useScrollSpy(sectionIds, rootMargin = '-20% 0px -80% 0px') {
  const [activeSection, setActiveSection] = useState(null);

  const observers = useRef({});

  // Memoiza os sectionIds para evitar dependência circular
  const memoizedSectionIds = useMemo(() => {
    return Array.isArray(sectionIds) ? sectionIds : [];
  }, [sectionIds]);

  useEffect(() => {
    // Se não houver IDs, não faça nada
    if (memoizedSectionIds.length === 0) {
      return;
    }

    const options = {
      rootMargin: rootMargin,
      threshold: 0.1, // Adiciona threshold para melhor detecção
    };

    // Função que é chamada quando uma seção entra ou sai da "linha de gatilho"
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // Limpa observers existentes que não estão mais nos sectionIds
    Object.keys(observers.current).forEach((id) => {
      if (!memoizedSectionIds.includes(id)) {
        observers.current[id].disconnect();
        delete observers.current[id];
      }
    });

    // Cria um observador para cada seção
    memoizedSectionIds.forEach((id) => {
      // Se já existe observer para este id, não cria outro
      if (observers.current[id]) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observers.current[id] = new IntersectionObserver(callback, options);
        observers.current[id].observe(element);
      }
    });

    // Função de "limpeza" para desconectar os observadores quando o componente desmontar
    return () => {
      Object.values(observers.current).forEach((observer) => {
        observer.disconnect();
      });
      observers.current = {};
    };

    // As dependências do hook. Ele só vai rodar de novo se os IDs mudarem.
  }, [memoizedSectionIds, rootMargin]);

  // Cleanup quando o componente desmonta
  useEffect(() => {
    return () => {
      Object.values(observers.current).forEach((observer) => {
        observer.disconnect();
      });
      observers.current = {};
    };
  }, []);

  return activeSection;
}
