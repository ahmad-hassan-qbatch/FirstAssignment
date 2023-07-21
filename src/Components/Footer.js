import logo from "../nav.png";

export const Footer = () => {
  return (
    <div class="mx-1/4 p-8">
      <div class="grid grid-cols-6 gap-2 text-sm">
        <div class="col-span-2">
          <img src={logo} class="h-8 mr-3" alt="Flowbite Logo"></img>
          <p class="text-md font-bold">The smart way to start you next idea.</p>
        </div>
        <div class="forFooter" >
          <p class="font-bold text-black">How it works</p>
          <p>Overview</p>
          <p>Pricing</p>
          <p>Service Area</p>
        </div>
        <div class="forFooter" >
          <p class="font-bold text-black">Resources</p>
          <p>Customer Stories</p>
          <p>Knowledge Base</p>
          <p>Contact Us</p>
        </div>
        <div class="forFooter" >
          <p class="font-bold text-black">Products</p>
          <p>Corporate Partner</p>
          <p>Secure Identity</p>
          <p>Legal Help</p>
          <p>First Capital</p>
        </div>
        <div class="forFooter" >
          <p class="font-bold text-black">Company</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Term of Use</p>
        </div>
      </div>
    </div>
  );
};

StyleSheet = { color:"#929DAC"}

export default Footer;