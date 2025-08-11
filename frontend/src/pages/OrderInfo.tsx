import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface FAQItem {
  question: string;
  answer: string;
}
const OrderInfoPage = () => {
  const [activeTab, setActiveTab] = useState('shipping');
  const [openFAQs, setOpenFAQs] = useState<number[]>([0]); // Default open the first FAQ
  const toggleFAQ = (index: number) => {
    setOpenFAQs(prev => prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]);
  };
  const shippingInfo = {
    title: 'Shipping Information',
    content: <div className="space-y-6">
        <p>
          We offer multiple shipping options to meet your needs. All orders are
          processed within 1-2 business days after payment confirmation.
        </p>
        <h3 className="font-bold text-lg">Shipping Options</h3>
        <div className="border rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Method</th>
                <th className="px-4 py-3 text-left">Estimated Delivery</th>
                <th className="px-4 py-3 text-left">Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-3">Standard Shipping</td>
                <td className="px-4 py-3">5-7 business days</td>
                <td className="px-4 py-3">$5.99 (Free over $100)</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Express Shipping</td>
                <td className="px-4 py-3">2-3 business days</td>
                <td className="px-4 py-3">$12.99</td>
              </tr>
              <tr className="border-t">
                <td className="px-4 py-3">Next Day Delivery</td>
                <td className="px-4 py-3">Next business day</td>
                <td className="px-4 py-3">$24.99</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 className="font-bold text-lg">Tracking Your Order</h3>
        <p>
          Once your order ships, you will receive a shipping confirmation email
          with a tracking number. You can track your package's progress by
          entering this number on our website or the carrier's website.
        </p>
        <h3 className="font-bold text-lg">International Shipping</h3>
        <p>
          We currently ship to select international destinations. International
          orders may be subject to import duties and taxes, which are the
          responsibility of the customer.
        </p>
      </div>
  };
  const returnsInfo = {
    title: 'Returns & Exchanges',
    content: <div className="space-y-6">
        <p>
          We want you to be completely satisfied with your purchase. If you're
          not happy with your order, we offer a simple returns and exchanges
          process.
        </p>
        <h3 className="font-bold text-lg">Return Policy</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Returns must be initiated within 30 days of delivery</li>
          <li>
            Items must be unworn, unwashed, and in original condition with all
            tags attached
          </li>
          <li>Original packaging should be included when possible</li>
          <li>
            Sale items are final sale and cannot be returned unless defective
          </li>
        </ul>
        <h3 className="font-bold text-lg">How to Return</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Log in to your account and go to your order history</li>
          <li>Select the order and items you wish to return</li>
          <li>Follow the prompts to generate a return shipping label</li>
          <li>Package the items securely with the return form</li>
          <li>Drop off the package at the specified carrier</li>
        </ol>
        <h3 className="font-bold text-lg">Refunds</h3>
        <p>
          Refunds will be issued to the original form of payment within 5-7
          business days after we receive and process your return. Shipping
          charges are non-refundable.
        </p>
        <h3 className="font-bold text-lg">Exchanges</h3>
        <p>
          If you need a different size or color, we recommend returning the item
          for a refund and placing a new order to ensure the fastest processing
          time.
        </p>
      </div>
  };
  const customOrderInfo = {
    title: 'Custom Orders',
    content: <div className="space-y-6">
        <p>
          Looking for something unique? We offer custom shoe orders to meet your
          specific needs and preferences.
        </p>
        <h3 className="font-bold text-lg">Custom Order Process</h3>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Contact our customer service team with your custom request</li>
          <li>Our design team will review your request and provide a quote</li>
          <li>Once approved, we'll create a digital mockup for your review</li>
          <li>After confirmation, production typically takes 4-6 weeks</li>
          <li>Your custom shoes will be shipped directly to you</li>
        </ol>
        <h3 className="font-bold text-lg">Custom Order Requirements</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Minimum order quantity may apply for certain customizations</li>
          <li>Custom orders require a 50% deposit to start production</li>
          <li>Custom orders are non-refundable once production has begun</li>
          <li>
            Custom color requests should reference Pantone colors when possible
          </li>
        </ul>
        <h3 className="font-bold text-lg">Custom Order Ideas</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Team colors and logos for sports teams</li>
          <li>Wedding party custom colors</li>
          <li>Corporate branding and events</li>
          <li>Special edition colorways</li>
          <li>Personalized details and monograms</li>
        </ul>
      </div>
  };
  const faqs: FAQItem[] = [{
    question: 'How do I find the right shoe size?',
    answer: 'We recommend measuring your feet and referring to our size guide. For the most accurate fit, measure your feet in the evening when they are at their largest and wear the socks you intend to wear with the shoes.'
  }, {
    question: 'Can I modify or cancel my order?',
    answer: 'Orders can be modified or canceled within 1 hour of placement. Please contact our customer service team immediately if you need to make changes to your order.'
  }, {
    question: 'Do you offer gift wrapping?',
    answer: 'Yes, we offer gift wrapping services for an additional $5 per item. You can select this option during checkout.'
  }, {
    question: 'How do I use a promo code?',
    answer: 'Enter your promo code in the designated field during checkout, before completing your payment. The discount will be applied automatically if the code is valid.'
  }, {
    question: 'What payment methods do you accept?',
    answer: 'We accept Visa, Mastercard, American Express, PayPal, GCash, and Stripe. All transactions are secure and encrypted.'
  }, {
    question: 'Are your shoes true to size?',
    answer: 'Most of our shoes fit true to size, but certain styles may run slightly larger or smaller. We provide specific fit notes on each product page to help you select the right size.'
  }];
  const tabs = [{
    id: 'shipping',
    label: 'Shipping',
    content: shippingInfo
  }, {
    id: 'returns',
    label: 'Returns & Exchanges',
    content: returnsInfo
  }, {
    id: 'custom',
    label: 'Custom Orders',
    content: customOrderInfo
  }, {
    id: 'faq',
    label: 'FAQ',
    content: {
      title: 'Frequently Asked Questions',
      content: null
    }
  }];
  return <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Order Information</h1>
      {/* Tabs */}
      <div className="mb-8 border-b">
        <div className="flex flex-wrap -mb-px">
          {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`inline-block py-4 px-6 font-medium text-lg border-b-2 ${activeTab === tab.id ? 'border-black text-black' : 'border-transparent text-gray-500 hover:text-black'}`}>
              {tab.label}
            </button>)}
        </div>
      </div>
      {/* Tab Content */}
      <div className="max-w-3xl mx-auto">
        {activeTab === 'faq' ? <div>
            <h2 className="text-2xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => <div key={index} className="border rounded-lg overflow-hidden">
                  <button onClick={() => toggleFAQ(index)} className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100">
                    <span className="font-medium">{faq.question}</span>
                    {openFAQs.includes(index) ? <ChevronUpIcon size={20} /> : <ChevronDownIcon size={20} />}
                  </button>
                  {openFAQs.includes(index) && <div className="p-4 bg-white">
                      <p>{faq.answer}</p>
                    </div>}
                </div>)}
            </div>
          </div> : <div>
            <h2 className="text-2xl font-bold mb-6">
              {tabs.find(tab => tab.id === activeTab)?.content.title}
            </h2>
            {tabs.find(tab => tab.id === activeTab)?.content.content}
          </div>}
      </div>
    </div>;
};
export default OrderInfoPage;