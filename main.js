
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
              serverUrl: "https://3.110.158.27/event"
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

  const loadFont = () => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        "https://cdn.jsdelivr.net/gh/mrdoob/three.js/examples/fonts/helvetiker_regular.typeface.json",
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

  const font = await loadFont();
  

  
    
      const image_58e00498_60386e28_iconGeometry = new THREE.PlaneGeometry(1, 0.32);
   const image_58e00498_60386e28_texture = await loadTexture("assets/sbi-applynow.png");
  const image_58e00498_60386e28_image = new THREE.MeshBasicMaterial({
      map: image_58e00498_60386e28_texture,
    });
    const image_58e00498_60386e28 = new THREE.Mesh(image_58e00498_60386e28_iconGeometry, image_58e00498_60386e28_image);
    image_58e00498_60386e28.scale.set(0.42, 0.42, 1);
    image_58e00498_60386e28.position.set(0.3, -0.6, 0);
    image_58e00498_60386e28.rotation.set(-0.001, 0, 0);
    image_58e00498_60386e28.userData.clickable = true
    
    image_58e00498_60386e28.userData.eventName ="unknown"
const image_2c85cb77_80397634_iconGeometry = new THREE.PlaneGeometry(1, 0.36);
   const image_2c85cb77_80397634_texture = await loadTexture("assets/sbicard-logo.png");
  const image_2c85cb77_80397634_image = new THREE.MeshBasicMaterial({
      map: image_2c85cb77_80397634_texture,
    });
    const image_2c85cb77_80397634 = new THREE.Mesh(image_2c85cb77_80397634_iconGeometry, image_2c85cb77_80397634_image);
    image_2c85cb77_80397634.scale.set(0.4, 0.4, 1);
    image_2c85cb77_80397634.position.set(-0.3, -0.6, 0);
    image_2c85cb77_80397634.rotation.set(-0.001, 0, 0);
    image_2c85cb77_80397634.userData.clickable = true
    
    image_2c85cb77_80397634.userData.eventName ="unknown"
const target_imageundeficbcd6_iconGeometry = new THREE.PlaneGeometry(1, 0.7602204869085898);
   const target_imageundeficbcd6_texture = await loadTexture("assets/shared image (5).jpg");
  const target_imageundeficbcd6_image = new THREE.MeshBasicMaterial({
      map: target_imageundeficbcd6_texture,
    });
    const target_imageundeficbcd6 = new THREE.Mesh(target_imageundeficbcd6_iconGeometry, target_imageundeficbcd6_image);
    target_imageundeficbcd6.scale.set(1, 1, 1);
    target_imageundeficbcd6.position.set(0, 0, 0);
    target_imageundeficbcd6.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_915f0f766d4_planeGeometry = new THREE.PlaneGeometry(1, 0.7678244972577697);

    const video_asset_915f0f766d4_Item0Video = await loadVideo("assets/sbi-video.mp4");

    const video_asset_915f0f766d4_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_915f0f766d4_Item0Video
    );

    let video_asset_915f0f766d4_Item0VideoMaterial

      video_asset_915f0f766d4_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_915f0f766d4_Item0VideoTexture,
        })
    
     const video_asset_915f0f766d4 = new THREE.Mesh(
      video_asset_915f0f766d4_planeGeometry,
      video_asset_915f0f766d4_Item0VideoMaterial
    );

  video_asset_915f0f766d4.position.set(0, 0, 0);



  if (isIOS) {
    video_asset_915f0f766d4_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_915f0f766d4_Item0Video.loop=true;
  
  video_asset_915f0f766d4.scale.set(0.95, 0.95, 0.9);

    video_asset_915f0f766d4.rotation.set(-0.001, 0, 0);

    
  
      
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
            video_asset_915f0f766d4_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_58e00498_60386e28) {
        setTimeout(()=>{
          window.location.href = "https://www.sbicard.com/sprint/MilesElite?CS=org"
        },100)
        }
      

      if (o.userData.clickable && o === image_2c85cb77_80397634) {
        setTimeout(()=>{
          window.location.href = "https://www.sbicard.com/en/personal/credit-cards/travel/sbi-card-miles-elite.page"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_58e00498_60386e28)
anchor.group.add(image_2c85cb77_80397634)

anchor.group.add(video_asset_915f0f766d4)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            




     
      video_asset_915f0f766d4_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_915f0f766d4_Item0Video.pause();

        



    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    