# Generics and Promise in TypeScript: কীভাবে কাজ করে এবং কেন ব্যবহার করা হয়?

## Introduction (ভূমিকা)

TypeScript-এ Generics একটি গুরুত্বপূর্ণ Feature, যা একই Function বা Class-কে বিভিন্ন Data Type নিয়ে কাজ করার সুযোগ দেয়। এর ফলে বারবার আলাদা Function তৈরি করার প্রয়োজন হয় না। অন্যদিকে, JavaScript-এ Asynchronous কাজ পরিচালনার জন্য Promise ব্যবহার করা হয়। TypeScript-এ Generics এবং Promise একসঙ্গে ব্যবহার করলে Asynchronous Data-এর Type নিরাপদভাবে নির্ধারণ করা যায়।

## What Are Generics?

Generics ব্যবহার করে এমন Function তৈরি করা যায়, যা বিভিন্ন ধরনের Data গ্রহণ করতে পারে এবং সেই Data-এর Type ধরে রাখতে পারে। সাধারণত Generics বোঝাতে `T` ব্যবহার করা হয়।

```ts
function identity<T>(value: T): T {
  return value;
}

console.log(identity<string>("Hello"));
console.log(identity<number>(100));
```

এখানে একই Function String এবং Number দুই ধরনের Data নিয়ে কাজ করছে। আলাদা Function তৈরি করতে হচ্ছে না। TypeScript নিজেই বুঝতে পারে কোন ধরনের Data ব্যবহার করা হচ্ছে।

## How Do Generics Work with Promise?

Promise মূলত এমন একটি Object, যা ভবিষ্যতে কোনো Asynchronous Operation-এর সফল ফলাফল অথবা ব্যর্থতার তথ্য প্রদান করে। TypeScript-এ `Promise<T>` ব্যবহার করে Promise সফল হলে কী ধরনের Data পাওয়া যাবে, তা নির্ধারণ করা যায়।

```ts
function getUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Mehedi");
    }, 1000);
  });
}

getUser().then((result) => {
  console.log(result);
});
```

এখানে `Promise<string>` বোঝাচ্ছে যে Promise সফল হলে একটি String Return করবে। ফলে TypeScript আমাদের Data Type সম্পর্কে আগে থেকেই ধারণা দিতে পারে।

## Real-World Use Case

বাস্তব প্রজেক্টে API থেকে Data পাওয়ার সময় Generics অনেক কাজে আসে। যেমন, একটি Function দিয়ে User, Product অথবা Order-এর Data Fetch করা যায়। প্রতিটি Data-এর জন্য আলাদা Function তৈরি করার পরিবর্তে Generic Function ব্যবহার করা সম্ভব।

এতে Code Reusable হয় এবং Type Safety বজায় থাকে। ভুল Data Type ব্যবহার করলে TypeScript Development-এর সময়ই Error দেখাতে পারে।

## Conclusion (উপসংহার)

Generics এবং Promise TypeScript-এর দুটি গুরুত্বপূর্ণ Feature। Generics Code Reusability বাড়ায়, আর Promise Asynchronous Operation পরিচালনা করতে সাহায্য করে। দুটো একসঙ্গে ব্যবহার করলে API এবং অন্যান্য Asynchronous কাজের ক্ষেত্রে আরও নিরাপদ ও Organized Code লেখা যায়।