export const CMD = {
  TEL: { ON: "CMD,3167,CX,ON", OFF: "CMD,3167,CX,OFF" },
  TIME: { GPS: "CMD,3167,ST,GPS", UTC: "CMD,3167,ST," }, // UTC는 시간을 같이 보내야 함
  SIM: {
    ENABLE: "CMD,3167,SIM,ENABLE",
    ACTIVATE: "CMD,3167,SIM,ACTIVATE",
    DISABLE: "CMD,3167,SIM,DISABLE",
  },
  SIMP: "CMD,3167,SIMP,",
  CAL: "CMD,3167,CAL",
  MEC: { ON: "CMD,3167,MEC,UC,ON", OFF: "CMD,3167,MEC,UC,OFF" },
};
