uniform sampler2D globalTexture;

varying vec2 vertexUV;

void main(){
    gl_FragColor = texture2D(globalTexture, vertexUV);
}