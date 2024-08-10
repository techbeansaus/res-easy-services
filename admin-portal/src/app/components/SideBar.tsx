export default function SideBar(){
   return (
    <div> 
         {/* // <!-- Sidebar --> */}
<div id="hs-application-sidebar" className="hs-overlay  [--auto-close:lg]
  hs-overlay-open:translate-x-0
  -translate-x-full transition-all duration-300 transform
  w-[260px] h-full
  hidden
  fixed inset-y-0 start-0 z-[60]
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" role="dialog" aria-label="Sidebar">
  <div className="relative flex flex-col h-full max-h-full">
    <div className="px-6 pt-4">
    {/* //   <!-- Logo --> */}
      <a className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80" href="../examples/html/scrollspy-sticky-sidebar.html" aria-label="Preline">
        {/* <svg className="w-28 h-auto" width="116" height="32" viewBox="0 0 116 32" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
        
        <svg className="w-28 h-auto" width="116" height="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
	 viewBox="0 0 250 250" enable-background="new 0 0 250 250" fill="none">
<path fill="#000000" opacity="1.000000" stroke="none" 
	d="
M251.000000,190.000000 
	C251.000000,210.309402 251.000000,230.618790 251.000000,250.964096 
	C167.788712,250.964096 84.577408,250.964096 1.000000,250.964096 
	C1.000000,230.980591 1.000000,210.958954 1.468657,190.468613 
	C12.199016,189.999908 22.460716,189.999908 32.650368,189.999908 
	C32.650368,185.319595 32.650368,181.262009 32.650368,176.998901 
	C28.152172,176.998901 23.999483,176.908569 19.853060,177.030762 
	C17.106655,177.111710 15.964612,176.074478 15.969254,173.251816 
	C16.020477,142.104843 16.020092,110.957726 15.968746,79.810753 
	C15.964174,77.037468 16.996157,75.889984 19.790703,75.969513 
	C24.067142,76.091217 28.349604,76.001442 32.698555,76.001442 
	C32.698555,71.417099 32.698555,67.360664 32.698555,63.000000 
	C21.933100,63.000000 11.466550,63.000000 1.000000,63.000000 
	C1.000000,42.357529 1.000000,21.715055 1.000000,1.036292 
	C84.211571,1.036292 167.423157,1.036292 251.000000,1.036292 
	C251.000000,21.352772 251.000000,41.707726 250.531342,62.531277 
	C241.467712,62.999870 232.872742,62.999870 224.348022,62.999870 
	C224.348022,67.678452 224.348022,71.734940 224.348022,76.278206 
	C230.090958,76.278206 235.492691,76.278206 240.775940,76.278206 
	C240.775940,110.028946 240.775940,143.282913 240.775940,177.029938 
	C235.169189,177.029938 229.767548,177.029938 224.302612,177.029938 
	C224.302612,181.585999 224.302612,185.641632 224.302612,190.000000 
	C233.401871,190.000000 242.200943,190.000000 251.000000,190.000000 
M59.423485,160.696136 
	C61.488979,167.678238 65.729248,172.703003 72.645180,175.267838 
	C82.963020,179.094269 92.508499,177.237900 101.356689,170.756271 
	C102.833794,177.168350 103.864769,177.569214 112.155479,177.037094 
	C117.500954,176.694000 115.926422,172.832901 115.941872,170.049545 
	C116.050964,150.395233 115.808350,130.736954 116.122627,111.087067 
	C116.210564,105.589134 113.911453,104.744209 109.282532,104.922661 
	C102.064987,105.200897 102.021835,104.985184 102.007957,111.013626 
	C101.978432,123.839203 102.154053,136.667801 101.927177,149.489502 
	C101.764946,158.658066 95.431381,164.716400 86.815399,164.558273 
	C78.218216,164.400497 73.022484,158.589233 73.005135,149.049164 
	C72.984230,137.556076 73.046005,126.062683 72.986336,114.569855 
	C72.932465,104.194107 74.338020,105.146904 63.275280,104.945511 
	C59.507641,104.876907 57.818737,105.974678 57.949207,110.027962 
	C58.484112,126.645111 58.810860,143.268951 59.423485,160.696136 
M135.000076,153.499939 
	C135.000473,159.157700 134.976410,164.815613 135.007751,170.473206 
	C135.042892,176.816956 135.277542,177.001389 142.528458,176.999542 
	C149.728271,176.997711 149.983078,176.811966 149.990952,170.415878 
	C150.014328,151.445770 150.000565,132.475616 149.999634,113.505486 
	C149.999207,104.939491 149.990387,105.171608 141.226624,104.906960 
	C136.515701,104.764702 134.797943,106.155975 134.900208,111.067299 
	C135.187714,124.872894 135.000305,138.688385 135.000076,153.499939 
M183.000031,127.411530 
	C183.352310,132.704681 183.466537,138.031998 184.217773,143.267914 
	C184.415054,144.642792 186.433090,146.540436 187.877686,146.814804 
	C193.708664,147.922272 195.669891,146.238342 195.935074,140.086868 
	C196.699738,122.349068 197.555817,104.609932 197.919617,86.861961 
	C198.171600,74.569153 199.613083,76.321915 187.094299,75.909531 
	C182.212692,75.748726 180.664963,77.446144 180.936386,82.198921 
	C181.777954,96.935669 182.333466,111.688759 183.000031,127.411530 
M183.156906,176.438156 
	C196.606735,178.855209 198.955719,177.107971 197.976425,165.416031 
	C197.962570,165.250610 198.034134,165.011749 197.948242,164.928528 
	C196.596451,163.618561 195.348206,161.380615 193.839020,161.184937 
	C182.419571,159.704361 181.724228,160.438766 182.022949,171.889023 
	C182.057098,173.197632 182.360794,174.499207 183.156906,176.438156 
M135.070297,88.108589 
	C135.688766,88.991852 136.120590,90.364922 136.954529,90.682686 
	C145.411850,93.905212 150.098312,90.672386 149.999115,81.840164 
	C149.993515,81.341469 149.953949,80.839600 149.994659,80.344513 
	C150.261215,77.103333 148.711777,75.945900 145.556183,75.973503 
	C133.185669,76.081726 135.182541,75.064537 135.006699,86.200089 
	C135.001450,86.532372 135.015442,86.864975 135.070297,88.108589 
z"/>
<path fill="#C1D82F" opacity="1.000000" stroke="none" 
	d="
M1.000000,63.468658 
	C11.466550,63.000000 21.933100,63.000000 32.698555,63.000000 
	C32.698555,67.360664 32.698555,71.417099 32.698555,76.001442 
	C28.349604,76.001442 24.067142,76.091217 19.790703,75.969513 
	C16.996157,75.889984 15.964174,77.037468 15.968746,79.810753 
	C16.020092,110.957726 16.020477,142.104843 15.969254,173.251816 
	C15.964612,176.074478 17.106655,177.111710 19.853060,177.030762 
	C23.999483,176.908569 28.152172,176.998901 32.650368,176.998901 
	C32.650368,181.262009 32.650368,185.319595 32.650368,189.999908 
	C22.460716,189.999908 12.199016,189.999908 1.468657,189.999954 
	C1.000000,147.979111 1.000000,105.958214 1.000000,63.468658 
z"/>
<path fill="#C1D82F" opacity="1.000000" stroke="none" 
	d="
M251.000000,189.531342 
	C242.200943,190.000000 233.401871,190.000000 224.302612,190.000000 
	C224.302612,185.641632 224.302612,181.585999 224.302612,177.029938 
	C229.767548,177.029938 235.169189,177.029938 240.775940,177.029938 
	C240.775940,143.282913 240.775940,110.028946 240.775940,76.278206 
	C235.492691,76.278206 230.090958,76.278206 224.348022,76.278206 
	C224.348022,71.734940 224.348022,67.678452 224.348022,62.999870 
	C232.872742,62.999870 241.467712,62.999870 250.531342,62.999935 
	C251.000000,105.020897 251.000000,147.041794 251.000000,189.531342 
z"/>
<path fill="#231F20" opacity="1.000000" stroke="none" 
	d="
M59.318848,160.293243 
	C58.810860,143.268951 58.484112,126.645111 57.949207,110.027962 
	C57.818737,105.974678 59.507641,104.876907 63.275280,104.945511 
	C74.338020,105.146904 72.932465,104.194107 72.986336,114.569855 
	C73.046005,126.062683 72.984230,137.556076 73.005135,149.049164 
	C73.022484,158.589233 78.218216,164.400497 86.815399,164.558273 
	C95.431381,164.716400 101.764946,158.658066 101.927177,149.489502 
	C102.154053,136.667801 101.978432,123.839203 102.007957,111.013626 
	C102.021835,104.985184 102.064987,105.200897 109.282532,104.922661 
	C113.911453,104.744209 116.210564,105.589134 116.122627,111.087067 
	C115.808350,130.736954 116.050964,150.395233 115.941872,170.049545 
	C115.926422,172.832901 117.500954,176.694000 112.155479,177.037094 
	C103.864769,177.569214 102.833794,177.168350 101.356689,170.756271 
	C92.508499,177.237900 82.963020,179.094269 72.645180,175.267838 
	C65.729248,172.703003 61.488979,167.678238 59.318848,160.293243 
z"/>
<path fill="#231F20" opacity="1.000000" stroke="none" 
	d="
M135.000122,152.999954 
	C135.000305,138.688385 135.187714,124.872894 134.900208,111.067299 
	C134.797943,106.155975 136.515701,104.764702 141.226624,104.906960 
	C149.990387,105.171608 149.999207,104.939491 149.999634,113.505486 
	C150.000565,132.475616 150.014328,151.445770 149.990952,170.415878 
	C149.983078,176.811966 149.728271,176.997711 142.528458,176.999542 
	C135.277542,177.001389 135.042892,176.816956 135.007751,170.473206 
	C134.976410,164.815613 135.000473,159.157700 135.000122,152.999954 
z"/>
<path fill="#231F20" opacity="1.000000" stroke="none" 
	d="
M183.000000,126.923515 
	C182.333466,111.688759 181.777954,96.935669 180.936386,82.198921 
	C180.664963,77.446144 182.212692,75.748726 187.094299,75.909531 
	C199.613083,76.321915 198.171600,74.569153 197.919617,86.861961 
	C197.555817,104.609932 196.699738,122.349068 195.935074,140.086868 
	C195.669891,146.238342 193.708664,147.922272 187.877686,146.814804 
	C186.433090,146.540436 184.415054,144.642792 184.217773,143.267914 
	C183.466537,138.031998 183.352310,132.704681 183.000000,126.923515 
z"/>
<path fill="#231F20" opacity="1.000000" stroke="none" 
	d="
M182.848206,176.121094 
	C182.360794,174.499207 182.057098,173.197632 182.022949,171.889023 
	C181.724228,160.438766 182.419571,159.704361 193.839020,161.184937 
	C195.348206,161.380615 196.596451,163.618561 197.948242,164.928528 
	C198.034134,165.011749 197.962570,165.250610 197.976425,165.416031 
	C198.955719,177.107971 196.606735,178.855209 182.848206,176.121094 
z"/>
<path fill="#231F20" opacity="1.000000" stroke="none" 
	d="
M135.045380,87.653008 
	C135.015442,86.864975 135.001450,86.532372 135.006699,86.200089 
	C135.182541,75.064537 133.185669,76.081726 145.556183,75.973503 
	C148.711777,75.945900 150.261215,77.103333 149.994659,80.344513 
	C149.953949,80.839600 149.993515,81.341469 149.999115,81.840164 
	C150.098312,90.672386 145.411850,93.905212 136.954529,90.682686 
	C136.120590,90.364922 135.688766,88.991852 135.045380,87.653008 
z"/>
</svg>


      </a>
    {/* //   <!-- End Logo --> */}
    </div>

    {/* // <!-- Content --> */}
    <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <nav className="hs-accordion-group p-3 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
        <ul className="flex flex-col space-y-1" data-hs-scrollspy="#scrollspy">
          <li>
            <a className="p-2 flex items-center gap-x-3.5 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700 active" href="#dashboard">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Dashboard
            </a>
          </li>

		  <li>
            <a className="p-2 flex items-center gap-x-3.5 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700" href="#reservations">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              Reservations
            </a>
          </li>

          <li>
            <a className="p-2 flex items-center gap-x-3.5 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700" href="#customers">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              Customers
            </a>
          </li>

          <li>
            <a className="p-2 flex items-center gap-x-3.5 text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 hs-scrollspy-active:bg-gray-100 dark:hs-scrollspy-active:bg-neutral-700" href="#users">
              <svg className="shrink-0 mt-0.5 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="15" r="3"/><circle cx="9" cy="7" r="4"/><path d="M10 15H6a4 4 0 0 0-4 4v2"/><path d="m21.7 16.4-.9-.3"/><path d="m15.2 13.9-.9-.3"/><path d="m16.6 18.7.3-.9"/><path d="m19.1 12.2.3-.9"/><path d="m19.6 18.7-.4-1"/><path d="m16.8 12.3-.4-1"/><path d="m14.3 16.6 1-.4"/><path d="m20.7 13.8 1-.4"/></svg>
              Users
            </a>
          </li>

        </ul>
      </nav>
    </div>
    {/* // <!-- End Content --> */}
  </div>
</div>
    </div>
   )
}