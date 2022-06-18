function getSucessfulDays(clientsArr, minClients) {
  let sum = 0;
  let sumDays = clientsArr.forEach(function (el) {
    if (el >= minClients) {
      sum += 1;
    }
  });
  console.log(sum);
  return sum;
}

const a = () => {
  console.log('Y');
};

a();

// examples
getSucessfulDays([25, 40, 10, 58], 30); // ==> 2
getSucessfulDays([25, 40, 10, 58], 100); // ==> 0

function sendEmail() {
  console.log('Gromcode party invitation was sent!');
}

function sendEmailList() {
  for (let i = 0; i < 30; i += 1) {
    sendEmail();
  }
}

sendEmailList();

function sum(from, to) {
  let res = 0;

  for (let num = from; num <= to; num += 1) {
    res += num;
  }

  return res;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  return sum(firstFrom, firstTo) > sum(secondFrom, secondTo);
}

// examples
sum(5, 10); // ===> 45
sum(11, 11); // ===> 11

compareSums(5, 10, 5, 10); // ===> false
compareSums(5, 15, 3, 5); // ===> true
compareSums(-2, 5, 5, 9); // ===> false
