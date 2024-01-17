import gradio as gr
from transformers import pipeline



def classifier(input):
  pipe = pipeline("zero-shot-classification", model="facebook/bart-large-mnli")
  class_names = ["Giving Bribe", "Asking for bribe", "Planning escape","Abuse","Normal Conversation","Threatening Officer"]
  return pipe(input, class_names, hypothesis_template="The sentiment of this text is {}.")
with gr.Blocks(theme='upsatwal/mlsc_tiet') as demo:
    title = gr.HTML("<h1>Dialogue LLM</h1>")
    with gr.Row():
      img = gr.Image('./Rajasthan_Police_Logo.png',label = 'MLSC Logo',show_label = False,elem_id = 'image',height = 200)
    
    input = gr.Textbox(label="How can I assist you?")  # Textbox for user input
    output = gr.Textbox(label="Here you go:")  # Textbox for chatbot response
    btn = gr.Button(value="Answer",elem_classes="button-chatbot",variant = "primary")  # Button to trigger the agent call
    btn.click(fn=classifier, inputs=input,outputs=output)
demo.launch(share = True,debug=True,show_api = False,show_error = False)
