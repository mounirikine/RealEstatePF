import finder from '../assets/finder.png'
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import OAuth from '../components/0Auth';

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const [loading, setLoading] = useState(false);
  const [_, setCookies] = useCookies(["access_token"]);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    const formData = { email, password }; // Assuming you have defined username, email, and password somewhere

    try {
      const res = await fetch("http://127.0.0.1:4000/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      setCookies("access_token", data.token);
      window.localStorage.setItem("userID", data.rest._id);

      navigate("/");
      window.location.reload(false);
    } catch (error) {
      console.error("Error Login user:", error);
      toast.error("Email or Password is not correct ! try Again");
    }
    setLoading(false);
  };



  return (
    <>
    <section className="flex flex-col  md:flex-row h-screen items-center">
    <div className="bg-white w-full  lg:w-5/12   md:mx-0   h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

  <div className="w-full h-100">

    <div>
       <img src={finder} width={300} alt="" />
    </div>
    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

    <form className="mt-6" onSubmit={handleLogin}>
      <div>
        <label className="block text-gray-700">Email Address</label>
        <input type="email" name="" id="" placeholder="example@gmail.com" onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
      </div>

      <div className="mt-4">
        <label className="block text-gray-700">Password</label>
        <input type="password" name="" id="" placeholder="Password" minlength="6" onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" required />
      </div>

      <div className="text-right mt-2">
        <Link to={'/forgot-pass'} className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700" >
      Forgot Password?</Link>
      </div>

      <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6">{loading ? (
                                  <span className="loading loading-spinner loading-sm"></span>
                                ) : (
                                  " Log In"
                                )}</button>
    </form>

    <hr className="my-6 border-gray-300 w-full" />
    <OAuth/>
    <p className="mt-8">Need an account? <Link to="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Create an
            account</Link></p>


  </div>
</div>
<div className=" hidden   w-7/12 h-screen lg:flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="587.41943" height="631.17578" viewBox="0 0 687.41943 631.17578" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M868.11393,728.66644a110.58287,110.58287,0,0,1-4.78906,34.601c-.11984.407-.26351.81406-.40717,1.22123H792.42276a63.26721,63.26721,0,0,1,4.76523-14.36717c5.86648-12.45158,15.4446-23.10727,24.903-33.691,13.02624-14.58275,25.74119-29.04565,27.75265-48.01028a108.91144,108.91144,0,0,1,12.26,25.31019,29.74832,29.74832,0,0,0-9.84148,6.03411c-.79023.7423-1.62841,1.81987-1.22123,2.8495.38306.862,1.43666,1.14947,2.37056,1.34093,2.25086.431,4.50173.862,6.75259,1.26917,1.77193.35909,3.56782.69436,5.36372,1.02963A117.57937,117.57937,0,0,1,868.11393,728.66644Z" transform="translate(-256.29028 -134.41211)" fill="#f2f2f2"/><path d="M927.33059,720.90819c-11.30226,6.87229-18.48584,17.504-24.35232,29.40474a30.07765,30.07765,0,0,0-13.67281,7.18359c-.81421.74244-1.65224,1.81987-1.22124,2.8495.35924.86214,1.43681,1.14947,2.37056,1.34093,2.2269.43114,4.50173.86214,6.72862,1.26917-.21542.5029-.431,1.02963-.64642,1.53253H821.82765A105.64062,105.64062,0,0,1,833.058,751.654c.886-.88611,1.7959-1.72414,2.7298-2.58613a111.73991,111.73991,0,0,1,32.32614-20.40144A113.72224,113.72224,0,0,1,927.33059,720.90819Z" transform="translate(-256.29028 -134.41211)" fill="#f2f2f2"/><path d="M834.27923,764.48865H767.75914a108.05808,108.05808,0,0,1,.09587-15.99544,114.38378,114.38378,0,0,1,47.53135-83.16209c-3.44813,12.28395-1.6762,24.49613,1.91559,36.75611-.50276.16763-1.00566.3113-1.46063.50276a29.751,29.751,0,0,0-9.84148,6.03426c-.79023.7423-1.62826,1.81986-1.22123,2.84949.35909.862,1.43666,1.14933,2.37056,1.34093,2.25086.431,4.50173.862,6.72862,1.26917,1.7959.3591,3.59179.69436,5.38769,1.0536.838.14367,1.6762.31116,2.51423.47879.1197.28733.1916.55084.3113.81421,4.21439,11.6134,8.81185,23.32268,10.967,35.22357a82.22012,82.22012,0,0,1,1.10154,9.02728C834.23129,761.95046,834.27923,763.21948,834.27923,764.48865Z" transform="translate(-256.29028 -134.41211)" fill="#f2f2f2"/><circle cx="68.96917" cy="22.51356" r="22.51356" fill="#fd6584"/><path d="M375.65,146.26638a11.17014,11.17014,0,0,0-9.42609-7.8338c-.04889-.0069-.09531.00221-.144-.00093a1.40431,1.40431,0,0,0-.19217-.04425c-10.29582-1.33065-22.18063,3.59355-26.47157,13.35441a10.90634,10.90634,0,0,0-9.13439-4.4512,11.12429,11.12429,0,0,0-9.94978,8.01979,1.30511,1.30511,0,0,0,.58123,1.42832,5.70473,5.70473,0,0,0,2.3522,1.194q2.80467.59418,5.6293,1.08861,5.51176.96456,11.08106,1.55966a164.77536,164.77536,0,0,0,22.69671.8579c2.52337-.07864,4.95677-.16237,7.26873-1.276a10.81544,10.81544,0,0,0,4.16979-3.63879A12.26953,12.26953,0,0,0,375.65,146.26638Z" transform="translate(-256.29028 -134.41211)" fill="#f0f0f0"/><path d="M328.85719,176.28442a11.17041,11.17041,0,0,0-9.42608-7.83375c-.049-.00689-.09542.00221-.1441-.00093a1.403,1.403,0,0,0-.19206-.04425c-10.29583-1.33065-22.18064,3.5935-26.47168,13.35436a10.90589,10.90589,0,0,0-9.13439-4.45115,11.12428,11.12428,0,0,0-9.94978,8.01979,1.30534,1.30534,0,0,0,.58133,1.42832,5.70507,5.70507,0,0,0,2.3521,1.194q2.80467.5941,5.6293,1.08861,5.51177.96448,11.08116,1.55966a164.782,164.782,0,0,0,22.69671.8579c2.52326-.07864,4.95667-.16242,7.26873-1.27609a10.81674,10.81674,0,0,0,4.16979-3.63874A12.26994,12.26994,0,0,0,328.85719,176.28442Z" transform="translate(-256.29028 -134.41211)" fill="#f0f0f0"/><path d="M545.439,525.72047c-.56982.83546-2.06819,1.83005-2.65225,2.65225l.62307-1.88938-.21238-.43756-1.32613-2.65225-33.76317-68.04347-.01295-.01325L450.8594,340.0435v-.01325l-1.31317-2.639V337.378l-28.32585-57.06315-1.33908-2.7053q1.51132.03979,3.02328.11935l1.35268,2.71856L452.50411,337.378l.01295.01325,1.31317,2.639v.01325l55.77625,112.36256v.01326l1.31317,2.639v.01326L544.68282,523.062l.45068.915Z" transform="translate(-256.29028 -134.41211)" fill="#3f3d56"/><path d="M541.67249,340.04344H288.9926c.67666-.8885,1.36562-1.777,2.08178-2.65225H539.59071C540.30687,338.2664,540.99583,339.155,541.67249,340.04344Z" transform="translate(-256.29028 -134.41211)" fill="#3f3d56"/><path d="M573.68533,452.41926c-.07965.8885-.17224,1.777-.292,2.65225H508.66506v-2.65225Z" transform="translate(-256.29028 -134.41211)" fill="#3f3d56"/><path d="M298.607,328.652v213.4c-.915-.96809-1.7904-1.94941-2.65225-2.93073V331.58272C296.8166,330.60144,297.692,329.62012,298.607,328.652Z" transform="translate(-256.29028 -134.41211)" fill="#3f3d56"/><rect x="40.99104" y="388.97982" width="246.74163" height="2.65225" fill="#3f3d56"/><path d="M543.80778,525.72047h.305v-.43761A4.353,4.353,0,0,1,543.80778,525.72047Zm-2.0422-186.00228c-.67667-.8885-1.36563-1.777-2.08179-2.65225a158.8465,158.8465,0,0,0-116.686-59.66237q-1.51132-.07963-3.02328-.11934c-1.512-.03979-3.02393-.06631-4.54884-.06631a158.65348,158.65348,0,0,0-116.72554,51.10884c-.91495.96807-1.7904,1.94941-2.65225,2.93075q-2.52632,2.84452-4.88038,5.80843c-.71608.87525-1.40512,1.76375-2.08178,2.65225a158.77807,158.77807,0,0,0,6.96216,201.7301c.86185.98132,1.7373,1.96268,2.65225,2.93072A158.923,158.923,0,0,0,544.842,528.8501c.58407-.82219,1.16748-1.64438,1.7373-2.47985a157.86007,157.86007,0,0,0,26.90705-71.624c.11979-.87524.21239-1.76374.292-2.65225q.77508-7.75781.78221-15.74109a158.23133,158.23133,0,0,0-32.795-96.63474Zm29.0556,115.02808a155.09013,155.09013,0,0,1-25.5946,68.90544q-.53712.81558-1.11374,1.63115a4.353,4.353,0,0,1-.305.43761c-.0926.14585-.19879.29175-.305.43756a156.29915,156.29915,0,0,1-244.80279,14.29562c-.91495-1.00786-1.80335-2.01569-2.65225-3.05007a156.16725,156.16725,0,0,1-3.6203-197.68545c.70321-.8885,1.40577-1.777,2.13488-2.65225.47787-.59675.96805-1.18025,1.48542-1.76375.8489-1.03437,1.7373-2.04222,2.65225-3.05009a156.03867,156.03867,0,0,1,116.72554-52.38193q2.96434,0,5.88791.11934c1.02115.02652,2.02934.07957,3.0368.13261a156.28251,156.28251,0,0,1,111.93841,56.9438c.72911.87525,1.43232,1.76375,2.13488,2.65225a156.50872,156.50872,0,0,1,32.70245,112.37583c-.09324.88853-.18584,1.77709-.305,2.65229Zm-27.01332,70.9742h.305v-.43761a4.36691,4.36691,0,0,1-.30506.43761Z" transform="translate(-256.29028 -134.41211)" fill="#ccc"/><path d="M395.36964,226.75624q0,1.09384-.07086,2.16948a32.8639,32.8639,0,0,1-3.07925,11.931c-.01372.032-.02983.06172-.04343.09151-.08239.17374-.167.34743-.25383.519a32.46892,32.46892,0,0,1-1.74879,3.08621A33.0251,33.0251,0,0,1,363.06979,259.806l.327,18.80068,4.26348-2.24492.76129,1.44709-4.99276,2.629.61037,34.91746.0068.46637-3.2965.73381.0068-.46865,1.0379-56.27851a32.95945,32.95945,0,0,1-23.31795-10.14562c-.208-.21482-.41375-.43663-.615-.6561l-.02288-.02522a33.09448,33.09448,0,0,1-6.02149-9.318c.032.03655.0663.07086.09835.1074-13.62233-34.233-5.697-50.10274,15.6778-42.60783.11429-.05715.23094-.112.34524-.16916a33.09138,33.09138,0,0,1,42.87069,13.01458c.20126.33833.3956.68354.583,1.031A32.88572,32.88572,0,0,1,395.36964,226.75624Z" transform="translate(-256.29028 -134.41211)" fill="#e5e5e5"/><path d="M434.24342,197.63713a49.681,49.681,0,0,1-4.99951,18.89728c-5.583,11.29861-15.383,19.86532-27.59666,23.06133a.11956.11956,0,0,1-.06629.01327,41.88285,41.88285,0,0,1-9.40226,1.3394h-.26524c-.33153.01319-.66306.01319-.9946.01319-.22541,0-.45083,0-.67633-.01319a43.31614,43.31614,0,0,1-42.64814-43.31128v-.47739a30.02892,30.02892,0,0,1,1.19354-8.169c0-.0132.01319-.02647.01319-.03975a28.30774,28.30774,0,0,1,7.54566-12.10752c8.68618-8.59327,22.43809-13.9906,34.57208-22.53085C417.49446,135.61424,437.015,154.21981,434.24342,197.63713Z" transform="translate(-256.29028 -134.41211)" fill="#e5e5e5"/><path d="M429.24391,216.53441c-5.583,11.29861-15.383,19.86532-27.59666,23.06133a.11956.11956,0,0,1-.06629.01327,42.65319,42.65319,0,0,1-9.36244,1.24656h-.30506q-.83542.01992-1.67093,0a43.38834,43.38834,0,0,1-42.30334-43.86823,44.38726,44.38726,0,0,1,.84874-7.99657c0-.0132.01319-.02647.01319-.03975a28.30774,28.30774,0,0,1,7.54566-12.10752A43.32366,43.32366,0,0,0,390.468,228.25739c.41109.07956.82219.15912,1.23328.22541,1.19347.199,2.387.34481,3.59383.43765A43.26744,43.26744,0,0,0,429.24391,216.53441Z" transform="translate(-256.29028 -134.41211)" opacity="0.2" style={{isolation:"isolate"}}/><polygon points="136.097 133.582 142.638 130.139 141.64 128.243 136.053 131.184 135.633 107.056 135.633 107.053 135.623 106.542 135.623 106.451 135.406 94.073 135.102 76.628 134.869 63.224 134.747 63.224 134.519 75.596 134.519 75.599 134.183 93.85 133.951 106.443 133.95 106.548 133.883 110.141 132.557 182.216 132.548 182.692 136.973 183.934 136.965 183.454 136.097 133.582" fill="#3f3d56"/><path d="M550.21394,353.34571c-27.50187-5.51053-55.09147-10.50942-83.01607-13.56861a453.24159,453.24159,0,0,0-79.79247-2.30732c-24.03512,1.62123-48.27614,5.42291-70.85537,14.08947-17.39924,6.67838-35.94594,16.78247-45.34432,33.63318-9.05962,16.24333-5.52607,34.97505,4.33872,49.96174,11.86938,18.03211,30.378,30.38869,49.62086,39.42,21.90972,10.283,45.3442,16.9484,68.80866,22.61705,11.90048,2.87508,23.86539,5.47383,35.83135,8.05955,2.49628.53938,3.56287-3.29492,1.05761-3.83625-24.13043-5.21417-48.33063-10.44542-71.8618-17.99342-21.77558-6.9849-44.06-15.93252-61.89226-30.59946-14.42634-11.86555-28.14282-29.19684-27.29131-48.902.8584-19.86459,17.52525-33.73427,33.861-42.27136,20.41515-10.66894,43.60961-15.86591,66.33749-18.58206a403.05565,403.05565,0,0,1,78.36137-1.06574c34.87278,2.65344,69.22978,8.80879,103.45534,15.70328" transform="translate(-256.29028 -134.41211)"/><path d="M421.101,384.98207c11.57332,5.78455,18.61933,13.42434,18.61933,21.80388,0,18.05121-32.66408,32.6846-72.95678,32.6846-17.5181,0-33.58976-2.76836-46.16621-7.37875,13.35789,6.67668,32.74842,10.88067,54.33737,10.88067,40.29262,0,72.95678-14.63339,72.95678-32.6846C447.89152,400.08475,437.45128,390.97589,421.101,384.98207Z" transform="translate(-256.29028 -134.41211)" fill="#f1f1f1"/><path d="M446.84423,397.38134c13.05915,6.52719,21.00983,15.14785,21.00983,24.60312,0,20.3687-36.8576,36.88075-82.32311,36.88075-19.76723,0-37.90205-3.12377-52.09314-8.326,15.07285,7.53384,36.95278,12.27754,61.31329,12.27754,45.46551,0,82.3231-16.512,82.3231-36.88074C477.0742,414.423,465.29367,404.14475,446.84423,397.38134Z" transform="translate(-256.29028 -134.41211)" fill="#f1f1f1"/><path d="M411.24906,390.44363c8.15368,4.07542,13.11783,9.45783,13.11783,15.36141,0,12.71753-23.01269,23.02717-51.39989,23.02717a96.54421,96.54421,0,0,1-32.52531-5.19851c9.411,4.70389,23.07214,7.66573,38.2821,7.66573,28.3872,0,51.4-10.3096,51.4-23.02717C430.12368,401.08387,422.76824,394.66644,411.24906,390.44363Z" transform="translate(-256.29028 -134.41211)" fill="#f1f1f1"/><path d="M367.83059,414.79822c-16.7666,0-24.92041-4.59961-28.80811-8.458a5.06423,5.06423,0,0,1,3.5835-8.648h58.49267a3.82915,3.82915,0,0,1,2.37061,6.83838C397.51076,409.21472,386.49123,414.79822,367.83059,414.79822Z" transform="translate(-256.29028 -134.41211)" fill="#3f3d56"/><path d="M379.97616,355.93377a22.17266,22.17266,0,0,0-15.9718-4.36892c10.09866,2.49341,2.12957,16.44977,11.32623,30.9238,5.0119,7.88791-4.7352,11.755-14.02049,12.81366a22.25477,22.25477,0,0,0,18.66606-39.36856Z" transform="translate(-256.29028 -134.41211)" fill="#3f3d56"/><rect x="111.18158" y="214.24603" width="2.15365" height="51.26414" fill="#3f3d56"/><path d="M576.88326,363.04607a53.27525,53.27525,0,0,0-74.233,12.88289c-16.94135,24.05638-33.94069,87.13823-21.94086,123.682,35.79257-37.80686,90.78065-41.73546,109.05672-62.33188C609.29475,415.27105,600.93963,379.98744,576.88326,363.04607Z" transform="translate(-256.29028 -134.41211)" fill="#7af065"/><circle id="af3c8991-f89c-43e0-a050-89c81726f2a6" data-name="b262ea8c-1946-46c9-a449-3a1996c39394" cx="289.19324" cy="265.73329" r="17.37481" fill="#fff"/><circle id="a49e5b2e-c339-415c-b240-8977b61bd9a6" data-name="bcc29a3a-8123-4529-80aa-6f70df2823cf" cx="209.73137" cy="372.74086" r="11.38013" fill="#7af065"/><path d="M564.07253,396.1363a17.37448,17.37448,0,1,1-30.00827,17.52125A17.37227,17.37227,0,0,0,560.51613,391.827,17.37446,17.37446,0,0,1,564.07253,396.1363Z" transform="translate(-256.29028 -134.41211)" fill="#231f20" opacity="0.2" style={{isolation:"isolate"}}/><path d="M589.79882,437.361c-18.276,20.59642-73.26415,24.525-109.05672,62.33189a73.694,73.694,0,0,1-2.57267-10.57762c35.77477-34.36992,87.70166-38.71351,105.35965-58.61332,15.8042-17.81077,13.344-44.31482-.91911-62.75651C602.17163,385.87839,607.69493,417.19276,589.79882,437.361Z" transform="translate(-256.29028 -134.41211)" fill="#231f20" opacity="0.2" style={{isolation:"isolate"}}/><polygon points="520.879 617.234 507.91 617.234 501.74 567.209 520.882 567.209 520.879 617.234" fill="#ffb6b6"/><path d="M780.47719,764.21822l-41.81888-.00155v-.52894a16.27795,16.27795,0,0,1,16.27707-16.27681h.001l7.63877-5.79517,14.25224,5.796,3.65053.00015Z" transform="translate(-256.29028 -134.41211)" fill="#2f2e41"/><polygon points="470.62 609.061 457.969 611.918 440.931 564.48 459.603 560.265 470.62 609.061" fill="#ffb6b6"/><path d="M732.90606,755.008l-40.792,9.21027-.11651-.51595a16.278,16.278,0,0,1,12.29183-19.46249l.001-.00022,6.17459-7.33548,15.17891,2.51423,3.5609-.804Z" transform="translate(-256.29028 -134.41211)" fill="#2f2e41"/><path d="M793.59594,445.81943c6.0807,18.33937,5.43783,38.24623-1.46158,59.6117L789.185,625.72425c4.87591,5.366,7.93567,27.24566.42474,42.91278-10.02978,20.9212-3.12024,49.85264-10.2101,63.73231H758.83512l-5.05369-56.50849-4.45084-6.3722-.67725-50.96857c-2.73126-6.46673-5.89587-12.87988-.34088-20.37182l-.14812-8.85323-.78958-47.19124L716.36092,587.455c-.8811,10.26416-6.12787,15.64239-13.07428,19.11841l9.60517,42.392c16.79895,14.3789,12.69049,36.63189,12.96783,57.23321l5.508,24.30944-25.31,2.26263L694.8884,699.80368l-12.55781-20.315-21.841-81.21589,15.23134-35.35069,6.22527-14.44833,34.76528-80.68732Z" transform="translate(-256.29028 -134.41211)" fill="#2f2e41"/><path d="M578.73434,380.41348a9.80023,9.80023,0,0,0,14.96785-1.3373l33.52732,9.42438-5.50305-17.24083L590.732,364.95338a9.85334,9.85334,0,0,0-11.99769,15.4601Z" transform="translate(-256.29028 -134.41211)" fill="#ffb8b8"/><path d="M606.15534,366.48865l32.72479-.24h0a54.70856,54.70856,0,0,1,27.05733-.61281l1.73658.40167,13.65654-1.54889c8.14227-16.27512,23.24994-30.9895,43.53113-44.54471a27.81717,27.81717,0,0,1,41.01027,6.86068h0a27.8471,27.8471,0,0,1-7.46767,37.48492l-61.8,36.33465a36.23053,36.23053,0,0,1-17.87066,4.99482h0l-.14993.078-35.25314-13.20837-18.135-2.30768-24.59046-7.14665Z" transform="translate(-256.29028 -134.41211)" fill="#7af065"/><circle cx="481.15814" cy="124.83496" r="30.87556" fill="#ffb8b8"/><path d="M766.28322,278.8289c2.28842-3.26534,3.91147-8.49494,4.87032-12.31736a37.07488,37.07488,0,0,0-5.07682-29.71919,11.30429,11.30429,0,0,0-4.40651-4.15875c-1.86814-.83408-4.33132-.63537-5.63357.94253a10.13227,10.13227,0,0,0-3.219-7.37847,17.85692,17.85692,0,0,0-7.157-4.02341,29.7376,29.7376,0,0,0-29.60347,7.31938c-1.48984,1.51612-.95832-6.05946-2.61289-4.72505A8.22972,8.22972,0,0,1,707.593,226.856c-2.11367-.22511-6.00142,7.30707-6.02384,5.18157-2.22369,2.2283-3.20338,11.62534-2.50777,14.69556s11.0438,1.71326,14.01076,2.76552c1.96535.697,4.10018.72055,6.13552,1.17429a15.29688,15.29688,0,0,1,11.33691,16.8241,20.2661,20.2661,0,0,1,4.66818-4.52813,6.8594,6.8594,0,0,1,6.23048-.77781,7.70641,7.70641,0,0,1,3.79731,4.78446c.67384,1.98515.935,4.0926,1.6213,6.07347,2.01388,5.81233,3.05292,11.91369,8.66663,13.29183C759.95858,287.42839,763.1587,283.28728,766.28322,278.8289Z" transform="translate(-256.29028 -134.41211)" fill="#2f2e41"/><path d="M796.23061,439.69861l-3.39-6.78c-4.15-25.71-8.25-49.69-2.68-71.26.35-18.83-5.47-36.52-21.63-46.18l-7.29-4.36-3.69-9.36005-33.98.83-.1,12.27-12.17,19.41v.08l.76,105.62,3.36,10.9-5.07,12.68,2.69,8.09,66.99-10.71,7.79-1.25a13.91763,13.91763,0,0,0,2.59-1.13,14.23178,14.23178,0,0,0,6.22-6.95c.07-.17.13-.33.19-.5a13.93382,13.93382,0,0,0,.9-4.3A14.3033,14.3033,0,0,0,796.23061,439.69861Z" transform="translate(-256.29028 -134.41211)" fill="#7af065"/><path d="M797.7206,446.79865a13.93382,13.93382,0,0,1-.9,4.3l-6.41,7.45a13.91763,13.91763,0,0,1-2.59,1.13l-7.79,1.25,11.27-21.19-24.77-54.23Z" transform="translate(-256.29028 -134.41211)" opacity="0.2"/><path d="M824.68088,509.52283a10.29646,10.29646,0,0,1-1.55552-15.71161L806.8217,461.054l18.87477,2.2984L838.285,494.10684a10.35228,10.35228,0,0,1-13.60412,15.416Z" transform="translate(-256.29028 -134.41211)" fill="#ffb8b8"/><path d="M758.587,396.81378l12.368-1.70824s1.19418,18.64689,7.11025,21.47291,3.92171,3.29111,4.61933,6.28265,3.85468,7.51238,8.541,9.57376,26.00274,53.89582,26.00274,53.89582l17.94928-4.18573a57.74664,57.74664,0,0,1-3.25557-13.96054c-.6306-7.21282-8.805-24.23193-11.497-26.75839s-1.62778-6.98027-3.023-12.96336-.42666-.43528-2.75207-10.40709-28.4688-69.73306-29.56449-78.94023-13.925-14.62669-13.925-14.62669l-9.97182,2.3254Z" transform="translate(-256.29028 -134.41211)" fill="#7af065"/><path id="a00e3c47-1fa9-4e2e-8ad1-93a2fdd4719a-841" data-name="f02c4e45-f306-4b42-b3ad-5ddd3016d7d2" d="M553.18172,765.58789h389.281a1.247,1.247,0,0,0,0-2.494H553.1817a1.247,1.247,0,1,0,0,2.494h0Z" transform="translate(-256.29028 -134.41211)" fill="#ccc"/></svg>
</div>



</section>
    </>
  )
}

export default Login


















// import { Link, useNavigate } from "react-router-dom";

// import { useState } from "react";
// import { useCookies } from "react-cookie";
// import { toast } from "react-toastify";
// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [_, setCookies] = useCookies(["access_token"]);

//   // const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     const formData = { email, password }; // Assuming you have defined username, email, and password somewhere

//     try {
//       const res = await fetch("http://127.0.0.1:4000/api/auth/sign-in", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();

//       setCookies("access_token", data.token);
//       window.localStorage.setItem("userID", data.rest._id);

//       navigate("/");
//       window.location.reload(false);
//     } catch (error) {
//       console.error("Error Login user:", error);
//       toast.error("Email or Password is not correct ! try Again");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="font-sans text-[#333] py-2">
//       <div className="min-h-screen flex flex-col items-center px-5  justify-center">
//         <div className="grid md:grid-cols-2 items-center gap-4 bg-white max-w-6xl w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
//           <div className="md:max-w-md w-full sm:px-6 py-4">
//             <form onSubmit={handleLogin}>
//               <div className="mb-12 ">
//                 <img src={logo1} alt="" width={200} />

//                 <h3 className="text-3xl py-5">Sign in</h3>
//               </div>
//               <div className="space-x-8 flex items-center pb-5">
//                 <div className="flex items-center justify-center  dark:bg-gray-800">
//                   <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
//                     <img
//                       className="w-6 h-6"
//                       src="https://www.svgrepo.com/show/475656/google-color.svg"
//                       loading="lazy"
//                       alt="google logo"
//                     />
//                     <span>Login with Google</span>
//                   </button>
//                 </div>
//               </div>
//               <div>
//                 <label className="text-sm block mb-2">Email</label>
//                 <div className="relative flex items-center">
//                   <input
//                     name="email"
//                     type="text"
//                     required
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
//                     placeholder="Enter email"
//                   />
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="#bbb"
//                     stroke="#bbb"
//                     className="w-[18px] h-[18px] absolute right-2"
//                     viewBox="0 0 682.667 682.667"
//                   >
//                     <defs>
//                       <clipPath id="a" clipPathUnits="userSpaceOnUse">
//                         <path
//                           d="M0 512h512V0H0Z"
//                           data-original="#000000"
//                         ></path>
//                       </clipPath>
//                     </defs>
//                     <g
//                       clip-path="url(#a)"
//                       transform="matrix(1.33 0 0 -1.33 0 682.667)"
//                     >
//                       <path
//                         fill="none"
//                         stroke-miterlimit="10"
//                         stroke-width="40"
//                         d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
//                         data-original="#000000"
//                       ></path>
//                       <path
//                         d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
//                         data-original="#000000"
//                       ></path>
//                     </g>
//                   </svg>
//                 </div>
//               </div>
//               <div className="mt-8">
//                 <label className="text-sm block mb-2">Password</label>
//                 <div className="relative flex items-center">
//                   <input
//                     name="password"
//                     type="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                     className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
//                     placeholder="Enter password"
//                   />
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="#bbb"
//                     stroke="#bbb"
//                     className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
//                     viewBox="0 0 128 128"
//                   >
//                     <path
//                       d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
//                       data-original="#000000"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//               <div className="flex items-center justify-between gap-2 mt-5">
//                 <div className="flex items-center">
//                   <input
//                     id="remember-me"
//                     name="remember-me"
//                     type="checkbox"
//                     className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                   />
//                   <label for="remember-me" className="ml-3 block text-sm">
//                     Remember me
//                   </label>
//                 </div>
//                 <div>
//                   <a
//                     href="jajvascript:void(0);"
//                     className="text-blue-600 font-semibold text-sm hover:underline"
//                   >
//                     Forgot Password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-12">
//                 <button
//                   type="submit"
//                   className="w-full flex items-center justify-center gap-3 shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white secondary_color  focus:outline-none"
//                 >
//                   {loading ? (
//                     <span className="loading loading-spinner loading-sm"></span>
//                   ) : (
//                     " Sign Up"
//                   )}
//                 </button>
//               </div>
//               <p className="text-sm mt-4 ">
//                 Don't have an account{" "}
//                 <Link
//                   to="/register"
//                   className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
//                 >
//                   Register here
//                 </Link>
//               </p>
//             </form>
//           </div>
//           <div className="md:h-full hidden md:flex lg:flex max-md:mt-10 border shadow-md primary rounded-xl lg:p-12 p-8">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               data-name="Layer 1"
//               width="453"
//               height="451.73152"
//               viewBox="0 0 793 551.73152"
//               xmlns:xlink="http://www.w3.org/1999/xlink"
//             >
//               <ellipse
//                 cx="158"
//                 cy="539.73152"
//                 rx="158"
//                 ry="12"
//                 fill="#e6e6e6"
//               />
//               <path
//                 d="M324.27227,296.55377c27.49676-11.6953,61.74442-4.28528,95.19092.85757.31124-6.228,4.08385-13.80782.132-18.15284-4.80115-5.2788-4.35917-10.82529-1.47008-16.40375,7.38788-14.265-3.1969-29.44375-13.88428-42.0647a23.66937,23.66937,0,0,0-19.75537-8.29179l-19.7975,1.41411A23.70939,23.70939,0,0,0,343.635,230.85851v0c-4.72724,6.42917-7.25736,12.84055-5.66438,19.21854-7.08065,4.83882-8.27029,10.67977-5.08851,17.2644,2.698,4.14592,2.66928,8.18161-.12275,12.1056a55.89079,55.89079,0,0,0-8.31011,16.5061Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//               <path
//                 d="M977.70889,651.09727H417.29111A18.79111,18.79111,0,0,1,398.5,632.30616h0q304.727-35.41512,598,0h0A18.79111,18.79111,0,0,1,977.70889,651.09727Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//               <path
//                 d="M996.5,633.41151l-598-1.10536,69.30611-116.61553.3316-.55268V258.13057a23.7522,23.7522,0,0,1,23.75418-23.75418H899.792a23.7522,23.7522,0,0,1,23.75418,23.75418V516.90649Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#3f3d56"
//               />
//               <path
//                 d="M491.35028,250.95679a7.74623,7.74623,0,0,0-7.73753,7.73753V493.03073a7.74657,7.74657,0,0,0,7.73753,7.73752H903.64972a7.74691,7.74691,0,0,0,7.73753-7.73752V258.69432a7.74657,7.74657,0,0,0-7.73753-7.73753Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#fff"
//               />
//               <path
//                 d="M493.07794,531.71835a3.32522,3.32522,0,0,0-3.01275,1.93006l-21.35537,46.42514a3.31594,3.31594,0,0,0,3.01221,4.7021H920.81411a3.3157,3.3157,0,0,0,2.96526-4.79925L900.5668,533.55126a3.29926,3.29926,0,0,0-2.96526-1.83291Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//               <circle cx="492.34196" cy="67.97967" r="4.97412" fill="#fff" />
//               <path
//                 d="M651.69986,593.61853a3.32114,3.32114,0,0,0-3.20165,2.4536l-5.35679,19.89649a3.31576,3.31576,0,0,0,3.20166,4.17856h101.874a3.31531,3.31531,0,0,0,3.13257-4.40093l-6.88691-19.89649a3.31784,3.31784,0,0,0-3.13366-2.23123Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//               <polygon
//                 points="720.046 337.135 720.046 341.556 264.306 341.556 264.649 341.004 264.649 337.135 720.046 337.135"
//                 fill="#2f2e41"
//               />
//               <circle
//                 cx="707.33457"
//                 cy="77.37523"
//                 r="77.37523"
//                 fill="#7af065"
//               />
//               <path
//                 d="M942.89,285.223H878.77911a4.42582,4.42582,0,0,1-4.42144-4.42145V242.11391a4.42616,4.42616,0,0,1,4.42144-4.42144H942.89a4.42616,4.42616,0,0,1,4.42144,4.42144v38.68761A4.42582,4.42582,0,0,1,942.89,285.223Zm-64.11091-43.10906v38.68761h64.11415L942.89,242.11391Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#fff"
//               />
//               <path
//                 d="M930.73105,242.11391h-39.793V224.42814c0-12.80987,8.36792-22.10721,19.89649-22.10721s19.89648,9.29734,19.89648,22.10721Zm-35.37153-4.42144h30.95009V224.42814c0-10.413-6.36338-17.68576-15.475-17.68576s-15.47505,7.27281-15.47505,17.68576Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#fff"
//               />
//               <circle cx="707.33457" cy="86.21811" r="4.42144" fill="#fff" />
//               <path
//                 d="M856.81994,421.28372H538.18006a5.90767,5.90767,0,0,1-5.90073-5.90073V336.342a5.90767,5.90767,0,0,1,5.90073-5.90072H856.81994a5.90767,5.90767,0,0,1,5.90073,5.90072V415.383A5.90767,5.90767,0,0,1,856.81994,421.28372Zm-318.63988-88.4821a3.5443,3.5443,0,0,0-3.54043,3.54043V415.383a3.54431,3.54431,0,0,0,3.54043,3.54044H856.81994a3.54431,3.54431,0,0,0,3.54043-3.54044V336.342a3.5443,3.5443,0,0,0-3.54043-3.54043Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#e6e6e6"
//               />
//               <circle
//                 cx="384.19021"
//                 cy="198.69546"
//                 r="24.03645"
//                 fill="#e6e6e6"
//               />
//               <path
//                 d="M643.203,356.80541a4.00608,4.00608,0,1,0,0,8.01215H832.06074a4.00607,4.00607,0,0,0,0-8.01215Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#e6e6e6"
//               />
//               <path
//                 d="M643.203,380.84186a4.00607,4.00607,0,1,0,0,8.01214H724.469a4.00607,4.00607,0,1,0,0-8.01214Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#e6e6e6"
//               />
//               <path
//                 d="M467.022,382.46241,408.1189,413.778l-.74561-26.09629c19.22553-3.20948,37.51669-8.7974,54.42941-17.8946l6.1605-15.22008a10.31753,10.31753,0,0,1,17.53643-2.67788l0,0a10.31753,10.31753,0,0,1-.90847,14.06885Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#ffb8b8"
//               />
//               <path
//                 d="M323.09819,563.26707v0a11.57378,11.57378,0,0,1,1.46928-9.36311l12.93931-19.85777a22.61221,22.61221,0,0,1,29.335-7.73927h0c-5.438,9.25647-4.67994,17.37679,1.87806,24.43365a117.63085,117.63085,0,0,0-27.93606,19.04492A11.57386,11.57386,0,0,1,323.09819,563.26707Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//               <path
//                 d="M469.70475,537.30274l0,0a22.20314,22.20314,0,0,1-18.87085,10.77909l-85.96027.65122-3.728-21.62264,38.026-11.18413-32.06116-24.60507L402.154,450.31277l63.65,59.32431A22.20317,22.20317,0,0,1,469.70475,537.30274Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//               <path
//                 d="M351.45266,685.17939H331.32124c-18.07509-123.89772-36.47383-248.14186,17.8946-294.51529l64.12231,10.43852L405.13646,455.532l-35.7892,41.00845Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//               <path
//                 d="M369.14917,713.24594h0a11.57381,11.57381,0,0,1-9.3632-1.46873l-21.85854-2.93814a22.61221,22.61221,0,0,1-7.741-29.33451v0c9.2568,5.43749,17.37707,4.67891,24.43354-1.8795,4.98593,10.06738,13.20093,9.45331,21.04657,17.93494A11.57385,11.57385,0,0,1,369.14917,713.24594Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//               <path
//                 d="M399.1716,307.90158l-37.28042-8.94731c6.19168-12.6739,6.70155-26.77618,3.728-41.75406l25.35068-.74561C391.76421,275.08,394.16732,292.48081,399.1716,307.90158Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#ffb8b8"
//               />
//               <path
//                 d="M409.41752,423.55243c-27.13873,18.49308-46.31418.63272-60.94729-26.92346,2.03338-16.86188-1.259-37.04061-7.35672-58.96635a40.13762,40.13762,0,0,1,24.50567-48.40124h0l32.06116,13.421c27.22362,22.19038,32.582,46.227,22.36825,71.5784Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#7af065"
//               />
//               <path
//                 d="M331.32124,326.54178,301.4969,342.19956l52.9382,31.31555,7.366,18.16951a9.63673,9.63673,0,0,1-5.78925,12.73088h0a9.63673,9.63673,0,0,1-12.76159-8.54442l-.74489-12.66307-67.2838-22.20366a15.73306,15.73306,0,0,1-9.87265-9.61147v0a15.733,15.733,0,0,1,5.90262-18.30258l54.10485-37.11845Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#ffb8b8"
//               />
//               <path
//                 d="M361.14557,329.52422c-12.43861-5.4511-23.74934.47044-38.026,5.21926l-2.23683-39.51725c14.17612-7.55568,27.69209-9.59281,40.26285-3.728Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#7af065"
//               />
//               <circle
//                 cx="172.52496"
//                 cy="78.09251"
//                 r="23.80211"
//                 fill="#ffb8b8"
//               />
//               <path
//                 d="M404.5,249.22353c-23.56616,2.30811-41.52338-1.54606-53-12.52007v-8.8377h51Z"
//                 transform="translate(-203.5 -174.13424)"
//                 fill="#2f2e41"
//               />
//             </svg>{" "}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
