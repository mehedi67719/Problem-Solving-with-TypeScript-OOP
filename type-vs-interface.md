# Type Aliases vs Interfaces in TypeScript: পার্থক্য এবং কখন কোনটি ব্যবহার করবেন?

## Introduction (ভূমিকা)

TypeScript-এ নিজের প্রয়োজন অনুযায়ী Custom Type তৈরি করার জন্য `type` alias এবং `interface` অনেক বেশি ব্যবহৃত হয়। দুটোই মূলত ডেটার Structure নির্ধারণ করতে সাহায্য করে। প্রথমে দেখতে প্রায় একই রকম মনে হলেও এদের মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য রয়েছে। একজন Developer হিসেবে কখন কোনটি ব্যবহার করা উচিত, তা জানা প্রয়োজন।

## What Is a Type Alias?

`type` alias ব্যবহার করে কোনো Type-এর জন্য একটি নতুন নাম তৈরি করা যায়। এটি Object, String, Number, Union এবং Tuple-এর মতো বিভিন্ন ধরনের Type তৈরি করতে পারে।

```ts
type User = {
  name: string;
  age: number;
};

type Status = "active" | "inactive";
```

এখানে `User` একটি Object-এর Structure নির্ধারণ করেছে এবং `Status` শুধু দুটি নির্দিষ্ট String Value গ্রহণ করতে পারবে।

## What Is an Interface?

`interface` মূলত কোনো Object-এর Structure নির্ধারণ করতে ব্যবহৃত হয়। এটি বলে দেয় একটি Object-এর মধ্যে কী কী Property থাকবে এবং সেগুলোর Data Type কী হবে।

```ts
interface User {
  name: string;
  age: number;
}
```

Interface ব্যবহার করে সহজেই Reusable Object Structure তৈরি করা যায়। প্রয়োজনে অন্য Interface থেকে `extends` ব্যবহার করে নতুন Interface তৈরি করা সম্ভব।

## Key Differences (মূল পার্থক্য)

`type` এবং `interface`-এর একটি গুরুত্বপূর্ণ পার্থক্য হলো Declaration Merging। Interface-এর ক্ষেত্রে একই নাম দিয়ে একাধিকবার Declaration করা হলে TypeScript সেগুলোকে একসঙ্গে যুক্ত করতে পারে। কিন্তু Type Alias-এর ক্ষেত্রে এটি সম্ভব নয়।

Interface অন্য Interface-কে `extends` ব্যবহার করে Extend করতে পারে। অন্যদিকে Type Alias একাধিক Type-কে `&` Intersection Operator ব্যবহার করে একত্র করতে পারে।

আরেকটি বিষয় হলো, Interface মূলত Object Structure নিয়ে কাজ করে। কিন্তু Type Alias Object ছাড়াও Union, Tuple এবং Primitive Type তৈরি করতে পারে।

## When Should We Use Them?

আমার মতে, যখন কোনো Object-এর Structure নির্ধারণ করতে হয়, বিশেষ করে Class বা Reusable Object Contract তৈরি করার সময় Interface ব্যবহার করা ভালো। অন্যদিকে Union Type, Tuple অথবা Complex Type তৈরি করার প্রয়োজন হলে Type Alias ব্যবহার করা সুবিধাজনক।

তবে সাধারণ Object-এর ক্ষেত্রে দুটিই ব্যবহার করা যায়। তাই Project-এর প্রয়োজন এবং Coding Style অনুযায়ী যেকোনো একটি বেছে নেওয়া উচিত।

## Conclusion (উপসংহার)

Type Alias এবং Interface দুটিই TypeScript-এর গুরুত্বপূর্ণ বিষয়। কোনো একটি সবসময় অন্যটির চেয়ে ভালো নয়। এদের পার্থক্য এবং ব্যবহার সম্পর্কে ভালো ধারণা থাকলে আরও পরিষ্কার, সুন্দর এবং Maintainable Code লেখা সম্ভব।