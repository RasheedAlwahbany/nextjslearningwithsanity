import {
    createClient,
    createPreviewSubscriptionHook,
    createImageUrlBuilder,
    createPortableTextComponent,

}from '@sanity/client';
const config={
    projectId:"vaa4iwre",
    dataset:"production",
    apiVersion:"2021-10-21",
    useCode:false,
}

const sanityClient=createClient(config);
const previewSubscriptionHook=createPreviewSubscriptionHook(config);
const imageUrlBuilder=(source)=>createImageUrlBuilder(config).image(sourse);

const PortableTextComponent=createPortableTextComponent({
    ...config,
    serializers:{},
});
