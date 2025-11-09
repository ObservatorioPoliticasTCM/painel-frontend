<template>
  <div class="mobile-warning">
    <Background />
    <div class="warning-content">
      <!-- Logo OPP no topo -->
      <div class="opp-logo-section">
        <img src="@/assets/logo-opp.svg" alt="Logo OPP" class="opp-logo" />
      </div>

      <!-- Logo DataSP no terço superior -->
      <div class="logo-section">
        <img src="@/assets/logo.svg" alt="Logo DataSP" class="datasp-logo" />
      </div>

      <!-- Ícones de dispositivos -->
      <div class="devices-section">
        <div class="device-icon">
          <div class="device-wrapper mobile">
            <svg viewBox="0 0 100 160" xmlns="http://www.w3.org/2000/svg">
              <!-- Celular -->
              <rect x="10" y="0" width="80" height="140" rx="8" fill="none" stroke="black" stroke-width="3"/>
              <rect x="18" y="8" width="64" height="115" fill="none" stroke="black" stroke-width="2"/>
              <circle cx="50" cy="135" r="5" fill="black"/>
            </svg>
            <div class="status-badge error">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#dc3545"/>
                <line x1="7" y1="7" x2="17" y2="17" stroke="white" stroke-width="3" stroke-linecap="round"/>
                <line x1="17" y1="7" x2="7" y2="17" stroke="white" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="device-icon">
          <div class="device-wrapper laptop">
            <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
              <!-- Laptop -->
              <rect x="10" y="0" width="100" height="70" rx="4" fill="none" stroke="black" stroke-width="3"/>
              <rect x="14" y="4" width="92" height="57" fill="none" stroke="black" stroke-width="2"/>
              <path d="M 0 75 L 120 75 L 116 82 L 4 82 Z" fill="none" stroke="black" stroke-width="3"/>
              <line x1="60" y1="70" x2="60" y2="75" stroke="black" stroke-width="2"/>
            </svg>
            <div class="status-badge success">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#28a745"/>
                <polyline points="6,12 10,16 18,8" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="device-icon">
          <div class="device-wrapper desktop">
            <svg viewBox="0 0 160 120" xmlns="http://www.w3.org/2000/svg">
              <!-- Desktop -->
              <rect x="0" y="0" width="160" height="90" rx="4" fill="none" stroke="black" stroke-width="3"/>
              <rect x="4" y="4" width="152" height="78" fill="none" stroke="black" stroke-width="2"/>
              <rect x="65" y="95" width="30" height="4" rx="2" fill="black"/>
              <path d="M 40 112 L 120 112 L 116 118 L 44 118 Z" fill="none" stroke="black" stroke-width="3"/>
              <line x1="80" y1="90" x2="80" y2="95" stroke="black" stroke-width="3"/>
            </svg>
            <div class="status-badge success">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#28a745"/>
                <polyline points="6,12 10,16 18,8" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Mensagem de incompatibilidade -->
      <div class="message-section">
        <h2>Experiência Otimizada para Telas Maiores</h2>
        <p>
          Para visualizar todo o conteúdo e interagir com os dados de forma completa, 
          precisamos que o acesso seja realizado através de um dispositivo com tela maior.
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
import Background from './Background.vue'
import Footer from './Footer.vue'
</script>

<style scoped>
.mobile-warning {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
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
  position: relative;
  z-index: 10;
}

/* Logo OPP no topo */
.opp-logo-section {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 20;
}

.opp-logo {
  max-width: 128px;
  height: auto;
}

/* Logo Section - Terço superior */
.logo-section {
  padding: 2rem 1rem;
}

.datasp-logo {
  max-width: 60%;
  height: auto;
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
  flex: 1;
  max-width: 120px;
}

.device-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.device-icon svg {
  width: 100%;
  height: auto;
  max-height: 100px;
  margin-bottom: 0.5rem;
}

.status-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 32px;
  height: 32px;
}



.status-badge svg {
  width: 100%;
  height: 100%;
  margin: 0;
  max-height: none;
}

/* Message Section */
.message-section {
  flex: 1;
  padding: 0 1.5rem;
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
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8);
}

.message-section p {
  font-size: 1rem;
  line-height: 1.6;
  margin: 0.5rem 0;
}

.access-info {
  margin-top: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(1px);
  font-size: 1.1rem;
}

/* Ajustes do Footer para telas pequenas */
.mobile-warning :deep(footer) {
  margin-top: auto;
}

.mobile-warning :deep(.footer-container) {
  flex-direction: column;
  gap: 1rem;
}

.mobile-warning :deep(.footer-center) {
  order: -1;
  text-align: center;
  width: 100%;
}

.mobile-warning :deep(.footer-left) {
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
}

.mobile-warning :deep(.footer-left img) {
  margin: 0;
}

/* Responsividade para diferentes tamanhos de tela portrait */
@media (max-width: 480px) {
  .datasp-logo {
    max-width: 70%;
  }
  
  .device-icon svg {
    max-height: 80px;
  }
  
  .status-badge {
    width: 28px;
    height: 28px;
    top: -6px;
    right: 20px;
  }

  .laptop .status-badge {
    right: 0;
  }

  .desktop .status-badge {
    right: -14px;
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
  
  .status-badge {
    width: 36px;
    height: 36px;
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
    max-height: 120px;
  }
  
  .status-badge {
    width: 40px;
    height: 40px;
    top: -10px;
    right: -10px;
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
