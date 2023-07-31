<template>
  <div class="success-page mb">
    <div class="header mt-5">
      <!-- Replace the 'logo.png' with your actual logo image -->
      <img
        src="https://uploads-ssl.webflow.com/5ef0df6b9272f7410180a013/60c0e28575cd7c21701806fd_q1cunpuhbdreMPFRSFLyfUXNzpqv_I5fz_plwv6gV3sMNXwUSPrq88pC2iJijEV7wERnKXtdTA0eE4HvdnntGo9AHAWn-IcMPKV-rZw1v75vlTEoLF4OdNqsRb7C6r7Mvzrm7fe4.png"
        alt="Logo"
        class="logo"
      />
      <!-- <h1>Form Submitted Successfully!</h1> -->
    </div>

    <div class="content">
      <p>
        Thank you for submitting the form. Your information has been
        successfully recorded.
      </p>
    </div>

    <div class="button-container mb-5">
      <router-link to="/employee" class="back-to-form-btn"
        >Back to Form</router-link
      >
    </div>
  </div>
</template>

<style>
.success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* height: 100vh; */
  background-color: #f3f5f7;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.content {
  text-align: center;
  font-size: 18px;
  margin-bottom: 40px;
}

.button-container {
  display: flex;
}

.back-to-form-btn {
  background-color: #409eff;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.back-to-form-btn:hover {
  background-color: #66b1ff;
}

</style>
