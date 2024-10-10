export default function Home() {
  return (
    <main className=" flex flex-col justify-center h-full text-center gap-6 max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Create Invoice</h1>
      <div>
        <form action="">
            <div>
                <label htmlFor="">Billing Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Billing email</label>
                <input type="email" />
            </div>
            <div>
                <label htmlFor="">Billing Name</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Discription</label>
                <textarea name="" id=""></textarea>
            </div>
            
        </form>
      </div>
    </main>
  );
}
