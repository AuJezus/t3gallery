import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/04dcd495-1165-48e5-8e5d-9eaee72f2f57-jbxi6j.JPG",
  "https://utfs.io/f/9e04d293-b716-4699-85b7-c1d0aed2205e-ra6pnt.png",
  "https://utfs.io/f/6396a4ac-dc0f-4630-9ef2-2fcffa36bec7-xc0p3g.JPG",
  "https://utfs.io/f/57930f97-c358-40e1-b3e9-8e99bef40837-nprd8p.jpg",
  "https://utfs.io/f/19680635-f0c2-4184-bb0e-b3bb51a4e996-jbxi5o.JPG",
];

const mockImages = mockUrls.map((url, index) => ({ id: index + 1, url }));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}

        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
