export function CPU(cpu) {
  const units = ["CPU"];

  let unitIndex = 0;
  let scaledValue = cpu;

  return `${scaledValue} ${units[unitIndex]}`;
}

export function calculateCpu(cpu, incruces) {
  return 2 ** cpu;
}

export function RAM(ram) {
  const units = ["GB"];

  let unitIndex = 0;
  let scaledValue = ram;

  return `${scaledValue} ${units[unitIndex]}`;
}

export function calculateRam(ram) {
  return 2 ** ram;
}

export function HDD(hdd) {
  const units = ["GB"];

  let unitIndex = 0;
  let scaledValue = hdd;

  return `${scaledValue} ${units[unitIndex]}`;
}

export function calculateHdd(hdd) {
  return 2 ** hdd;
}
export function TRAFIC(trafic) {
  const units = ["TB"];

  let unitIndex = 0;
  let scaledValue = trafic;

  return `${scaledValue} ${units[unitIndex]}`;
}

export function calculateTrafic(trafic) {
  return trafic + 10;
}



export const  functionCalculateSelect = (key) => {
  switch (key) {
    case key == "cpu":
      
      break;
  
    default:
      break;
  }
}