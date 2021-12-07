export const handleIncrement = (count, setCounters, counters) =>
  setCounters(() => {
    let a = counters;
    a.map((e) => {
      if (e.id === count.id) {
        return e.value++;
      }
      return 0;
    });
    return a.map((e) => e);
  });

export const handleDecrement = (count, setCounters, counters) =>
  setCounters(() => {
    let a = counters;
    a.map((e) => {
      if (e.id === count.id && count.value > 0) {
        return e.value--;
      }
      return 0;
    });
    return a.map((e) => e);
  });
