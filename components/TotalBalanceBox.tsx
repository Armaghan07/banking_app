import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
  accounts = [], totalBanks, totalCurrentBalance
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">
          Bank Accounts: {totalBanks}
        </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">
            Total Current Balance
          </p>

          <div className="total-balance-amount flex-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TotalBalanceBox






















//external libraries aksar react hooks istamal karti han to is error kay lia do hal han ya to hum usko kisi new component kay zaria add karain ya phir hum apny component ko hi client bna dain

// import AnimatedCounter from "./AnimatedCounter";
// import DoughnutChart from "./DoughnutChart";

// const TotalBalanceBox = ({
//   accounts = [],
//   totalBanks,
//   totalCurrentBalance,
// }: TotalBalanceBoxProps) => {
//   return (
//     <section className=" total-balance ">
//       <div className=" total-balance-chart ">
//         <DoughnutChart accounts={accounts} />
//       </div>

//       <div className=" flex flex-col gap-6 ">
//         <h2 className=" header-2 ">Bank Accounts: {totalBanks}</h2>
//         <div className=" flex flex-col gap-2 ">
//           <p className=" total-balance-label ">Total Current Balnace</p>
//           <div className=" total-balance-amount flex-center gap-2 ">
//             <AnimatedCounter amount={totalCurrentBalance} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TotalBalanceBox;
