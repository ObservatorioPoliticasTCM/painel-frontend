<template>
  <div class="mobile-warning">
    <div class="warning-content">
      <!-- Logo DataSP no terço superior -->
      <div class="logo-section">
        <img src="@/assets/logo.svg" alt="Logo DataSP" class="datasp-logo" />
      </div>

      <!-- Ícones de dispositivos -->
      <div class="devices-section">
        <div class="device-icon">
          <svg viewBox="0 0 100 180" xmlns="http://www.w3.org/2000/svg">
            <!-- Celular -->
            <rect x="20" y="10" width="60" height="160" rx="8" fill="none" stroke="currentColor" stroke-width="3"/>
            <rect x="25" y="20" width="50" height="130" fill="none" stroke="currentColor" stroke-width="2"/>
            <circle cx="50" cy="160" r="5" fill="currentColor"/>
          </svg>
          <p>Celular</p>
        </div>

        <div class="device-icon">
          <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
            <!-- Laptop -->
            <rect x="20" y="10" width="120" height="80" rx="4" fill="none" stroke="currentColor" stroke-width="3"/>
            <rect x="25" y="15" width="110" height="65" fill="none" stroke="currentColor" stroke-width="2"/>
            <path d="M 10 95 L 150 95 L 145 100 L 15 100 Z" fill="none" stroke="currentColor" stroke-width="3"/>
            <line x1="80" y1="90" x2="80" y2="95" stroke="currentColor" stroke-width="2"/>
          </svg>
          <p>Laptop</p>
        </div>

        <div class="device-icon">
          <svg viewBox="0 0 180 140" xmlns="http://www.w3.org/2000/svg">
            <!-- Desktop -->
            <rect x="10" y="10" width="160" height="100" rx="4" fill="none" stroke="currentColor" stroke-width="3"/>
            <rect x="15" y="15" width="150" height="85" fill="none" stroke="currentColor" stroke-width="2"/>
            <rect x="70" y="115" width="40" height="5" rx="2" fill="currentColor"/>
            <path d="M 50 130 L 130 130 L 125 135 L 55 135 Z" fill="none" stroke="currentColor" stroke-width="3"/>
            <line x1="90" y1="110" x2="90" y2="115" stroke="currentColor" stroke-width="3"/>
          </svg>
          <p>Desktop</p>
        </div>
      </div>

      <!-- Mensagem de incompatibilidade -->
      <div class="message-section">
        <h2>Experiência Otimizada para Telas Maiores</h2>
        <p>
          Este painel foi desenvolvido para proporcionar a melhor experiência em 
          <strong>laptops e desktops</strong>.
        </p>
        <p>
          Para visualizar todo o conteúdo e interagir com os dados de forma completa, 
          recomendamos acessar através de um dispositivo com tela maior.
        </p>
        <p class="access-info">
          Por favor, utilize um <strong>computador</strong> ou <strong>laptop</strong> 
          para uma experiência ideal.
        </p>
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import Footer from './Footer.vue'
</script>

<style scoped>
.mobile-warning {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  z-index: 9999;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.warning-content {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

/* Logo Section - Terço superior */
.logo-section {
  flex: 0 0 33.33vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
}

.datasp-logo {
  max-width: 60%;
  height: auto;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
}

/* Devices Section - Até metade da página */
.devices-section {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2rem 1rem;
  gap: 1rem;
}

.device-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  flex: 1;
  max-width: 120px;
}

.device-icon svg {
  width: 100%;
  height: auto;
  max-height: 80px;
  margin-bottom: 0.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.device-icon p {
  font-size: 0.9rem;
  font-weight: 500;
  margin: 0;
  text-align: center;
}

/* Message Section */
.message-section {
  flex: 1;
  padding: 2rem 1.5rem;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.message-section h2 {
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.message-section p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0.5rem 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.message-section strong {
  font-weight: 700;
  color: #ffd700;
}

.access-info {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  font-size: 1.1rem;
}

/* Responsividade para diferentes tamanhos de tela portrait */
@media (max-width: 480px) {
  .datasp-logo {
    max-width: 70%;
  }
  
  .device-icon svg {
    max-height: 60px;
  }
  
  .message-section h2 {
    font-size: 1.3rem;
  }
  
  .message-section p {
    font-size: 0.95rem;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .datasp-logo {
    max-width: 50%;
  }
  
  .devices-section {
    gap: 1.5rem;
  }
  
  .device-icon {
    max-width: 140px;
  }
}

/* Ajuste para tablets em modo retrato */
@media (min-width: 769px) and (orientation: portrait) {
  .logo-section {
    flex: 0 0 25vh;
  }
  
  .datasp-logo {
    max-width: 40%;
  }
  
  .devices-section {
    gap: 2rem;
  }
  
  .device-icon {
    max-width: 160px;
  }
  
  .device-icon svg {
    max-height: 100px;
  }
  
  .message-section {
    padding: 3rem 2rem;
  }
  
  .message-section h2 {
    font-size: 2rem;
  }
  
  .message-section p {
    font-size: 1.2rem;
  }
}
</style>
