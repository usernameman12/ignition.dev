// boot.js
window.ignition = {
  _elements: {},
  _config: {},

  boot() {
    console.log("Ignition initialized.");
    if (typeof ignitionConfig === "object") {
      ignition._config = ignitionConfig;
    }
  }
};
