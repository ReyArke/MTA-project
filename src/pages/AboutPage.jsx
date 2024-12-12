import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

export const AboutPage = () => {
  return (
    <div>
      <Container>
        <BreadCrumb currentPageTitle="About_Us"/>
        <div>
          <section className="bg-blue-600 text-white py-16">
            <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">
                ကျွန်ုပ်တို့အွန်လိုင်းစျေးဝယ်ခြင်း
              </h1>
              <p className="text-lg">
                အွန်လိုင်းစျေးဝယ်ခြင်း၏ လွယ်ကူမှုနှင့် ယုံကြည်စိတ်ချမှုကို
                သင့်အတွက် ပေးစွမ်းရန် ကျွန်ုပ်တို့ ဆောင်ရွက်နေပါသည်။
              </p>
            </div>
          </section>
          <main className="container mx-auto my-12 px-6 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/007/578/826/non_2x/online-shop-logo-happy-shop-logo-design-vector.jpg"
                  alt="About Us Image"
                  className="rounded-lg shadow-lg"
                />
              </div>
              {/* Text Content */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  ကျွန်ုပ်တို့
                </h2>
                <p className="text-gray-600 leading-7 mb-4">
                  ကျွန်ုပ်တို့၏ အွန်လိုင်းစျေးဝယ်ခြင်းဝန်ဆောင်မှုသည်
                  မြန်မာနိုင်ငံအတွင်း လူတိုင်းအတွက် အသုံးချရလွယ်ကူသော
                  နည်းလမ်းဖြစ်သည်။ ကျွန်ုပ်တို့ သင့်အချိန်နှင့် အင်အားကို
                  လျော့နည်းစေပြီး စိတ်ချယုံကြည်မှုရှိသော
                  ဝန်ဆောင်မှုများပေးပါသည်။
                </p>
                <p className="text-gray-600 leading-7">
                  အကောင်းဆုံး ထုတ်ကုန်များနှင့် ဝန်ဆောင်မှုများကို
                  စျေးနိမ့်နှင့် အရည်အသွေးမြင့်ဖြင့် သင့်အိမ်တိုင်ရာတိုင်
                  ပို့ဆောင်ပေးပါသည်။
                </p>
              </div>
            </div>
          </main>
          <section className="bg-gray-100 py-12">
            <div className="container mx-auto text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                ကျွန်ုပ်တို့၏တန်ဖိုးများ
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    ယုံကြည်မှု
                  </h3>
                  <p className="text-gray-600">
                    ဖောက်သည်များအပေါ် ယုံကြည်မှုကို အစဉ်မပြတ် ဖော်ဆောင်ပါသည်။
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    အရည်အသွေး
                  </h3>
                  <p className="text-gray-600">
                    စျေးနိမ့်ရုံသာမက အရည်အသွေးမြင့် ထုတ်ကုန်များကိုပေးပါသည်။
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">
                    ဖောက်သည်စိတ်ကျေနပ်မှု
                  </h3>
                  <p className="text-gray-600">
                    သင့်လိုအပ်ချက်များကို အမြဲတမ်း ဦးစားပေးပါသည်။
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
};
