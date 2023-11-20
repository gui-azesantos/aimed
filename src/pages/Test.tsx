const Test = () => {
  return (
  
    <div className="relative p-4 border border-grey-lighter w-1/2">
    
        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
          <div className="flex -mr-px">
            <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">@</span>
          </div>	
          <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative focus:border-blue focus:shadow" placeholder="Username"/>
        </div>		
    
        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
          <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative" placeholder="Recipient's username" />
          <div className="flex -mr-px">
            <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">@example.com</span>
          </div>	
        </div>	
    
        <label for="basic-url" className="text-grey-darker inline-block mb-2">Your vanity URL</label>
        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
          <div className="flex -mr-px">
            <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">https://example.com/users/</span>
          </div>	
          <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light rounded rounded-l-none px-3 relative" />
        </div>				
    
        <div className="flex flex-wrap items-stretch w-full mb-4 relative">
          <div className="flex -mr-px">
            <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-r-none border border-r-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">$</span>
          </div>				
          <input type="text" className="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border h-10 border-grey-light px-3 relative" />
          <div className="flex -mr-px">
            <span className="flex items-center leading-normal bg-grey-lighter rounded rounded-l-none border border-l-0 border-grey-light px-3 whitespace-no-wrap text-grey-dark text-sm">.00</span>
          </div>	
        </div>			
    
      </div>
  );
};

export default Test;
