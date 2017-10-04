import Perf from 'react-addons-perf';

if (typeof window !== 'undefined') {
  window.Perf = Perf;
  console.log('start perf');
  Perf.start();
  setTimeout(() => {
    console.log('stop perf');
    Perf.stop();
    console.log(Perf.printWasted());
    console.log(Perf.printOperations());
  }, 5000);
}
