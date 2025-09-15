// somewhere in your app




import ScrollingPayments from '../utils/ScrollingPayments';

const Payments = () => {
   const icons = [
  { src: "/logo/1.png", alt: "Mastercard" },
  { src: "/logo/2.png", alt: "Mastercard" },
  { src: "/logo/3.png", alt: "BCA" },
  { src: "/logo/4.png", alt: "GoPay" },
  { src: "/logo/5.png", alt: "OVO" },
  { src: "/logo/6.png", alt: "ShopeePay" },
  { src: "/logo/7.png", alt: "ShopeePay" },
  { src: "/logo/8.png", alt: "ShopeePay" },
  { src: "/logo/9.png", alt: "ShopeePay" },
];
  return (
    <div className="py-12">
      <ScrollingPayments icons={icons} speed={18000} />
      
    </div>
  )
}

export default Payments

