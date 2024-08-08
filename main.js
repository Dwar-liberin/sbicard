
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "SBI",
              serverUrl: "https://lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = (fontURL) => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        fontURL,
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  
    
      const image_58e00498_60394a2d_iconGeometry = new THREE.PlaneGeometry(1, 0.32);
   const image_58e00498_60394a2d_texture = await loadTexture("assets/sbi-applynow.png");
  const image_58e00498_60394a2d_image = new THREE.MeshBasicMaterial({
      map: image_58e00498_60394a2d_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_58e00498_60394a2d = new THREE.Mesh(image_58e00498_60394a2d_iconGeometry, image_58e00498_60394a2d_image);
    image_58e00498_60394a2d.scale.set(0.3, 0.3, 0.3);
    image_58e00498_60394a2d.position.set(0.36, -0.55, 0);
    image_58e00498_60394a2d.rotation.set(0, 0, 0);
    image_58e00498_60394a2d.userData.clickable = true
    
    image_58e00498_60394a2d.userData.eventName ="Apply Now "
const image_2c85cb77_803d0a50_iconGeometry = new THREE.PlaneGeometry(1, 0.36);
   const image_2c85cb77_803d0a50_texture = await loadTexture("assets/sbicard-logo.png");
  const image_2c85cb77_803d0a50_image = new THREE.MeshBasicMaterial({
      map: image_2c85cb77_803d0a50_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_2c85cb77_803d0a50 = new THREE.Mesh(image_2c85cb77_803d0a50_iconGeometry, image_2c85cb77_803d0a50_image);
    image_2c85cb77_803d0a50.scale.set(0.3, 0.3, 0.3);
    image_2c85cb77_803d0a50.position.set(-0.36, -0.55, 0);
    image_2c85cb77_803d0a50.rotation.set(0, 0, 0);
    image_2c85cb77_803d0a50.userData.clickable = true
    
    image_2c85cb77_803d0a50.userData.eventName ="SBI Card Website"
const logo_850099c9_348785009_iconGeometry = new THREE.CircleGeometry(0.5,32);
   const logo_850099c9_348785009_texture = await loadTexture("assets/circle-wa-sm_113.png");
  const logo_850099c9_348785009_image = new THREE.MeshBasicMaterial({
      map: logo_850099c9_348785009_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const logo_850099c9_348785009 = new THREE.Mesh(logo_850099c9_348785009_iconGeometry, logo_850099c9_348785009_image);
    logo_850099c9_348785009.scale.set(0.2, 0.2, 0.2);
    logo_850099c9_348785009.position.set(0, -0.55, 0);
    logo_850099c9_348785009.rotation.set(0, 0, 0);
    logo_850099c9_348785009.userData.clickable = true
    
    logo_850099c9_348785009.userData.eventName ="Whatsapp"
const target_imageSBIMar760b4_iconGeometry = new THREE.PlaneGeometry(1, 0.7622601279317697);
   const target_imageSBIMar760b4_texture = await loadTexture("assets/SBIMarker.png");
  const target_imageSBIMar760b4_image = new THREE.MeshBasicMaterial({
      map: target_imageSBIMar760b4_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const target_imageSBIMar760b4 = new THREE.Mesh(target_imageSBIMar760b4_iconGeometry, target_imageSBIMar760b4_image);
    target_imageSBIMar760b4.scale.set(1, 1, 1);
    target_imageSBIMar760b4.position.set(0.01, -0.01, 0.01);
    target_imageSBIMar760b4.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_38adb9e7aa2_planeGeometry = new THREE.PlaneGeometry(1, 0.7673469387755102);

    const video_asset_38adb9e7aa2_Item0Video = await loadVideo("assets/sbi-card-miles.mp4");

    const video_asset_38adb9e7aa2_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_38adb9e7aa2_Item0Video
    );

    let video_asset_38adb9e7aa2_Item0VideoMaterial

      video_asset_38adb9e7aa2_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_38adb9e7aa2_Item0VideoTexture,
          transparent:true
        })
    
     const video_asset_38adb9e7aa2 = new THREE.Mesh(
      video_asset_38adb9e7aa2_planeGeometry,
      video_asset_38adb9e7aa2_Item0VideoMaterial
    );

  video_asset_38adb9e7aa2.position.set(0, 0, 0);



  if (isIOS) {
    video_asset_38adb9e7aa2_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_38adb9e7aa2_Item0Video.loop=true;
  
  video_asset_38adb9e7aa2.scale.set(1, 1, 1);

    video_asset_38adb9e7aa2.rotation.set(0, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_38adb9e7aa2_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_58e00498_60394a2d) {
        setTimeout(()=>{
          window.location.href = "https://www.sbicard.com/sprint/MilesElite?CS=org"
        },100)
        }
      

      if (o.userData.clickable && o === image_2c85cb77_803d0a50) {
        setTimeout(()=>{
          window.location.href = "https://www.sbicard.com/en/personal/credit-cards/travel/sbi-card-miles-elite.page"
        },100)
        }
      

      if (o.userData.clickable && o === logo_850099c9_348785009) {
        setTimeout(()=>{
          window.location.href = "https://api.whatsapp.com/send/?phone=917838666333&text=Hi&type=phone_number&app_absent=0"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_58e00498_60394a2d)
anchor.group.add(image_2c85cb77_803d0a50)
anchor.group.add(logo_850099c9_348785009)

anchor.group.add(video_asset_38adb9e7aa2)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            





     
      video_asset_38adb9e7aa2_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_38adb9e7aa2_Item0Video.pause();

        




    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    