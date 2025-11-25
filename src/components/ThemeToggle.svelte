<script lang="ts">
  import { onMount } from 'svelte';

  // Tenta adivinhar o tema antes mesmo de montar o componente para evitar o piscar
  // Se estiver no navegador e a classe 'dark' existir no HTML, começa como true
  let isDark: boolean = typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

  onMount(() => {
    // Garante a sincronia final assim que o componente carregar
    isDark = document.documentElement.classList.contains('dark');
    
    // Opcional: Escuta mudanças no sistema operacional para atualizar o ícone automaticamente
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          isDark = document.documentElement.classList.contains('dark');
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    
    return () => observer.disconnect();
  });

  const toggleTheme = (): void => {
    const html = document.documentElement;
    
    if (isDark) {
      // Se está escuro, remove a classe e muda estado para false
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      isDark = false;
    } else {
      // Se está claro, adiciona a classe e muda estado para true
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      isDark = true;
    }
  };
</script>

<button 
  on:click={toggleTheme}
  class="p-2 rounded-full text-gray-600 dark:text-gray-300 transition-colors focus:outline-none hover:bg-gray-200/50 dark:hover:bg-gray-800/50 hover:text-blue-600 dark:hover:text-blue-400"
  aria-label="Alternar tema"
  title={isDark ? "Mudar para tema claro" : "Mudar para tema escuro"}
>
  {#if isDark}
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/>
      <path d="M12 20v2"/>
      <path d="m4.93 4.93 1.41 1.41"/>
      <path d="m17.66 17.66 1.41 1.41"/>
      <path d="M2 12h2"/>
      <path d="M20 12h2"/>
      <path d="m6.34 17.66-1.41 1.41"/>
      <path d="m19.07 4.93-1.41 1.41"/>
    </svg>
  {:else}
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  {/if}
</button>