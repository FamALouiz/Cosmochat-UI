const randomConst = 10;
const mockGraphData = [
  {
    id: "January",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "February",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "March",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "April",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "May",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "June",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "July",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "August",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "September",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "October",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "November",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
  {
    id: "December",
    data: Array.from({ length: 12 }, (_, i) => ({
      x: i + 1,
      y: Math.floor(Math.random() * randomConst),
    })),
  },
];

export default mockGraphData;
