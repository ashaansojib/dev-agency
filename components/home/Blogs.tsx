import Image from "next/image";
import React from "react";
import blog1 from "../../public/1.jpg";
import Link from "next/link";
const Blogs = () => {
  return (
    <section className="my-container py-6">
      <div className="max-w-screen-sm mx-auto text-center py-4">
        <h2 className="title">Latest Blogs</h2>
        <p>
          Fusce placerat pretium mauris, vel sollicitudin elit lacinia vitae.
          Quisque sit amet nisi erat.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="text-center">
          <Image
            className="rounded-t-3xl"
            width={360}
            height={250}
            src={blog1}
            alt="blog"
          />
          <div className="p-2 border">
            <Link href="/" className="text-xl font-medium">
              5 steps to GDPR compliant on mobile apps
            </Link>
            <p className="text-secondary py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at
              possimus illo porro nemo facere distinctio suscipit, minima
              numquam fuga. Commodi atque deleniti similique deserunt pariatur,
              quam rem cumque autem.
            </p>
            <button className="my-btn">Read More</button>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="rounded-t-3xl"
            width={360}
            height={250}
            src={blog1}
            alt="blog"
          />
          <div className="p-2 border">
            <Link href="/" className="text-xl font-semibold">
              5 steps to GDPR compliant on mobile apps
            </Link>
            <p className="text-secondary py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at
              possimus illo porro nemo facere distinctio suscipit, minima
              numquam fuga. Commodi atque deleniti similique deserunt pariatur,
              quam rem cumque autem.
            </p>
            <button className="my-btn">Read More</button>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="rounded-t-3xl"
            width={360}
            height={250}
            src={blog1}
            alt="blog"
          />
          <div className="p-2 border">
            <Link href="/" className="text-xl font-semibold">
              5 steps to becoming GDPR compliant on mobile apps
            </Link>
            <p className="text-secondary py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at
              possimus illo porro nemo facere distinctio suscipit, minima
              numquam fuga. Commodi atque deleniti similique deserunt pariatur,
              quam rem cumque autem.
            </p>
            <button className="my-btn">Read More</button>
          </div>
        </div>
        <div className="text-center">
          <Image
            className="rounded-t-3xl"
            width={360}
            height={250}
            src={blog1}
            alt="blog"
          />
          <div className="p-2 border">
            <Link href="/" className="text-xl font-semibold">
              5 steps to becoming GDPR compliant on mobile apps
            </Link>
            <p className="text-secondary py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et at
              possimus illo porro nemo facere distinctio suscipit, minima
              numquam fuga. Commodi atque deleniti similique deserunt pariatur,
              quam rem cumque autem.
            </p>
            <button className="my-btn">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
